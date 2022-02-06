import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import TableRow from "../../Components/TableRow/TableRow";
import EditableRow from "../../Components/EditableRow/EditableRow";
import { useForm } from "react-hook-form";
//import { getAll } from "../../Services/productService";

function Products() {
  const { register, watch, handleSubmit } = useForm();
  const [code, setCode] = useState(0);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState(0);
  const [price, setPrice] = useState(0);
  const [notes, setNotes] = useState("");
  const [data, setData] = useState("");
  const [deleteCode, setDeleteCode] = useState(0);

  const [allProducts, setAllProducts] = useState([]); //Get all products

  const [editProductCode, setEditProductCode] = useState(null);

  // CARGAR LOS PRODUCTOS AL RECARGAR
  useEffect(() => {
    const consultaAPI = async () => {
      const response = await axios("http://localhost:5000/products");

      setAllProducts(response.data);
      //console.log(allProducts[3])
    };
    consultaAPI();
  }, []);

  // INGRESAR PRODUCTO A LA BASE DE DATOS
  const onSubmit = async (data) => {
    const response = await axios.post("http://localhost:5000/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    });
    console.log(response);
  };

  // BORRAR PRODUCTO DE LA BASE DE DATOS
  const handleDelete = async (deleteCode) => {
    setDeleteCode(deleteCode.toString())
    console.log(deleteCode)

    const response = await axios.post("http://localhost:5000/deleteproduct/"+deleteCode, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      data:deleteCode,
    });
    console.log(response);
  
  };

  const handleEdit = (e, product) => {
    //e.preventDefault();
    //console.log(product);
    setEditProductCode(product);
  };

  const handleEditForm = async () => {

    /* const response = await fetch("http://localhost:5000/products", {
      method: "POST",
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
    const res = await response.json(); */
  };

  return (
    <>
      <h2 className="title productTitle">Add a new product</h2>

      <form
        method="POST"
        action="http://localhost:5000/products/add"
        onSubmit={handleSubmit(onSubmit)}
        className="productForm"
      >
        <label htmlFor="code">Code:</label>
        <input
          {...register("code")}
          name="code"
          required="required"
          className="input productInput"
          placeholder="set a product code"
          type="number"
          //onChange={(e) => onChange(e)}
          //value={code}
        />

        <label htmlFor="product_name">Product Name:</label>
        <input
          {...register("product_name")}
          name="product_name"
          type="text"
          required="required"
          //value={productName}
          className="input productInput"
          placeholder="set a product name"
          //onChange={(e) => onChange(e)}
        />

        <label htmlFor="description">Description:</label>
        <input
          {...register("description")}
          name="description"
          type="text"
          required="required"
          //value={description}
          className="input productInput"
          placeholder="set a product description"
          //onChange={(e) => onChange(e)}
        />

        <label htmlFor="cost">Cost:</label>
        <input
          {...register("cost")}
          name="cost"
          type="number"
          required="required"
          //value={cost}
          className="input productInput"
          placeholder="$"
          //onChange={(e) => onChange(e)}
        />

        <label htmlFor="price">Price:</label>
        <input
          {...register("price")}
          name="price"
          type="number"
          required="required"
          //value={price}
          className="input productInput"
          placeholder="$"
          //onChange={(e) => onChange(e)}
        />

        <label htmlFor="notes">Notes:</label>
        <input
          {...register("notes")}
          name="notes"
          type="text-area"
          className="input productInput"
          placeholder="ser a product Note"
          // onChange={(e) => onChange(e)}
          //value={notes}
        />

        <input className="button formButton" type="submit" value="submit" />
      </form>

      <form className="formDisplayProducts">
        <table className="table table-striped">
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
            {
              allProducts.map((product, index) => {
              return <tr key={index}>
                <td>{product.code}</td>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td>{product.cost}</td>
                <td>{product.price}</td>
                <td>{product.notes}</td>
                <td>
                  <input type="button" value="DEL" onClick={()=>handleDelete(product.code)} />
                </td>
              </tr>
              })
            }
             
          </tbody>
        </table>
      </form>
    </>
  );
}

export default Products;
