import React from "react";

function Pizza({ pizza, handleEditPizzaBtn }) {

  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian === true ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={() => handleEditPizzaBtn(pizza)}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
