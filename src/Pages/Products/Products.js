import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
//import { getAll } from "../../Services/productService";


function Products() {
  const [code, setCode] = useState(0);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState(0);
  const [price, setPrice] = useState(0);
  const [notes, setNotes] = useState(""); 
  const [data, setData] = useState([]);
  
  // CARGAR LOS PRODUCTOS AL RECARGAR
  useEffect(()=>{
    const url = 'http://localhost:5000/products'
    axios(url).then(({data}) => {
       setData(data)
       console.log(data)
    })
  },[])

  // INGRESAR PRODUCTO A LA BASE DE DATOS
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/products", {
      "method": "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
        productName: productName,
        description: description,
        cost: cost,
        price: price,
        notes: notes,
      }),
    });
    const res= await response.json();
    window.open('http://localhost:5000/products/'+res.data.path);
  };

  const handleDelete = async (code) => {
    const deleteResponse = fetch("http://localhost:5000/deleteproduct/"+code, {
      method: 'DELETE',
      header: {
         'Accept' : 'application/json',
         'Content-Type' : 'application/json',
        }
      
      })

    console.log(deleteResponse)
    
  };

  
  return (
    <div className="container">
      <div className="left">
      <h2 className="title productTitle">Add a new product</h2>

      <form method="POST" onSubmit={handleSubmit} className="productForm">
        <label htmlFor="code">Code:</label>
        <input
          required="required"
          className="input productInput"
          placeholder="set a product code"
          type="number"
          name="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <label htmlFor="product_name">Product Name:</label>
        <input
          type="text"
          required="required"
          name="product_name"
          value={productName}
          className="input productInput"
          placeholder="set a product name"
          onChange={(e) => setProductName(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          required="required"
          name="description"
          value={description}
          className="input productInput"
          placeholder="set a product description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="cost">Cost:</label>
        <input
          type="number"
          required="required"
          name="cost"
          value={cost}
          className="input productInput"
          placeholder="$"
          onChange={(e) => setCost(e.target.value)}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          required="required"
          name="price"
          value={price}
          className="input productInput"
          placeholder="$"
          onChange={(e) => setPrice(e.target.value)}
        />

        <label htmlFor="notes">Notes:</label>
        <input
          type="text-area"
          name="notes"
          className="input productInput"
          placeholder="ser a product Note"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <input className="button formButton" type="submit" value="submit" />
      </form>
      </div>

      <div className="right">
        <table className="table table-striped" >
          <thead>
            <tr>
            <th>Code</th>
            <th>Product name</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Price</th>
            <th>Notes</th> 
            <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {data.map((product, index) => (
            <tr key={index}>
              <td> {product.Products.code}</td>
              <td> {product.Products.product_name}</td>
              <td> {product.Products.description}</td>
              <td> {product.Products.cost}</td>
              <td> {product.Products.price}</td>
              <td> {product.Products.notes}</td>
              <td>
                  <button className="btn btn-outline-danger mx-3" onClick={()=>handleDelete(product.Products.code)}>DEL</button>
                  <button className="btn btn-outline-info">EDIT</button>
              </td>

            </tr>
            ))
          }
          </tbody>
        </table>

      
      </div>

    </div>
  );
}

export default Products;
