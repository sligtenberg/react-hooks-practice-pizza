import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [pizzaToEdit, setPizzaToEdit] = useState({})

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then(r => r.json())
      .then(setPizzas)
  }, [])

  function handleEditPizzaBtn (pizza) {
    setPizzaToEdit(pizza)
  }

  function handlePizzaToppingEdit (newTopping) {
    setPizzaToEdit({...pizzaToEdit, topping: newTopping})
  }

  function handlePizzaSizeEdit (newSize) {
    setPizzaToEdit({...pizzaToEdit, size: newSize})
  }

  function handleVegChange (newStatus) {
    setPizzaToEdit({...pizzaToEdit, vegetarian: newStatus})
  }


  return (
    <>
      <Header />
      <PizzaForm
        pizzaToEdit={pizzaToEdit}
        handlePizzaToppingEdit={handlePizzaToppingEdit}
        handlePizzaSizeEdit={handlePizzaSizeEdit}
        handleVegChange={handleVegChange}
      />
      <PizzaList pizzas={pizzas} handleEditPizzaBtn={handleEditPizzaBtn}/>
    </>
  );
}

export default App;
