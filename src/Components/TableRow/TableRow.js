import React from 'react';

function TableRow({product, deleteCode, handleEdit, handleDelete}) {
  const handleDeleteWithCode = (code) =>{
    deleteCode = code;
  }

  return <tr>
    <td> {product.code}</td>
    <td> {product.product_name}</td>
    <td> {product.description}</td>
    <td> {product.cost}</td>
    <td> {product.price}</td>
    <td> {product.notes}</td>
    <td style={{minWidth:170}}>
      <button className="btn btn-outline-danger mx-3" onClick={handleDeleteWithCode(product.code)}>DEL</button>
      <button className="btn btn-outline-info" onClick={handleEdit(product.code)}>EDIT</button>
    </td>
  </tr>
}

export default TableRow;
