import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({ id: uuid(), name, category });
  }

  function handleChangeItem(e) {
    setName(e.target.value);
  }

  function handleChangeCategory(e) {
    setCategory(e.target.value);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeItem}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={handleChangeCategory}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
