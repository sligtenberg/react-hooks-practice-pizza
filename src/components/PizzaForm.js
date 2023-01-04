import React from "react";

function PizzaForm({ pizzaToEdit, handlePizzaToppingEdit, handlePizzaSizeEdit, handleVegChange }) {
  function handlePizzaEditSubmit () {
    fetch(`http://localhost:3001/pizzas/${pizzaToEdit.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pizzaToEdit),
    })
  }

  return (
    <form onSubmit={() => handlePizzaEditSubmit()}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={pizzaToEdit.topping}
            placeholder="Pizza Topping"
            onChange={event => handlePizzaToppingEdit(event.target.value)}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            value={pizzaToEdit.size}
            onChange={event => handlePizzaSizeEdit(event.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={pizzaToEdit.vegetarian}
              onChange={() => handleVegChange(true)}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!pizzaToEdit.vegetarian}
              onChange={() => handleVegChange(false)}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
