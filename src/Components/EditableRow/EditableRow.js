import React, {useState} from "react";

import "./EditableRow.css";

function EditableRow({key, code, productName, description, cost, price, notes}) {
    console.log(code, productName, description)
  
  const handleChange = (e) => {
    /* setCode(e.target.value)
    setProductName(e.target.value)
    setDescription(e.target.value)
    setCost(e.target.value)
    setPrice(e.target.value)
    setNotes(e.target.value) */
  }
  return (
    <tr key={key} className="editableRowTr">
      <td>
        <input
          type="text"
          placeholder="set a new code"
          name="code"
          value={code}
          onChange={(e)=>handleChange(e)}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="set a new product name"
          name="product_name"
          onChange={(e)=>handleChange(e)}
          value={productName}

        />
      </td>
      <td>
        <input
          type="text"
          placeholder="set a new description"
          name="description"
          onChange={(e)=>handleChange(e)}
          value={description}

        />
      </td>
      <td>
        <input
          type="number"
          placeholder="set a new cost"
          name="cost"
          onChange={(e)=>handleChange(e)}
          value={cost}

        />
      </td>
      <td>
        <input
          type="number"
          placeholder="set a new price"
          name="price"
          onChange={(e)=>handleChange(e)}
          value={price}

        />
      </td>
      <td>
        <input
          type="text"
          placeholder="set a new note"
          name="notes"
          onChange={(e)=>handleChange(e)}
          value={notes}

        />
      </td>
      <td>
        <button className="btn btn-outline-success">
          SET
        </button>

        <button className="btn btn-outline-dark">
        CANCEL
        </button>
      </td>
    </tr>
  );
}

export default EditableRow;
