import React, { useContext, useState } from 'react';
import { productContext } from '../context/ProductContext';
import { cartContext } from '../context/CartContext'
import '../../styles/Form.css';
import {useNavigate} from 'react-router-dom'
  
export default function Form() {
  let navigate = useNavigate()
  const {
    showFormEl,
    product,
    color,
    size,
    number,
    totalePrice,
  } = useContext(productContext);
  const {
    remouveProduct,
  } = useContext(cartContext)

  const GoogleSheetUrl = 'https://script.google.com/macros/s/AKfycbxZZjJOKY3hmbwz9_D7QdTJiAQxY8ACTP5WafNQXTbZt1SMyd1eSji6KGcba78V-vGD/exec';

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    houseAddress: '',
    productCategory: product.category,
    productName: product.name,
    color: color,
    size: size,
    quantity: number,
    price: `${totalePrice}$`,
  });
  const handleSubmit = async (e) => {
    e.preventDefault()
      fetch(GoogleSheetUrl, { method: 'POST', body: JSON.stringify(form)})
      .catch(error => console.error('Error!', error.message))
    showFormEl()
    navigate("/success")
    remouveProduct(product.name)
  };
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        required
        placeholder="First Name"
        onChange={(e) => {
          setForm({ ...form, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        name="lastName"
        required
        placeholder="Last Name"
        onChange={(e) => {
          setForm({ ...form, lastName: e.target.value });
        }}
      />
      <input
        type="text"
        name="phoneNumber"
        required
        placeholder="Phone Number"
        onChange={(e) => {
          setForm({ ...form, phoneNumber: e.target.value });
        }}
      />
      <input
        type="text"
        name="houseAddress"
        required
        placeholder="House Address"
        onChange={(e) => {
          setForm({ ...form, houseAddress: e.target.value });
        }}
      />
      <div className="btns">
        <button onClick={showFormEl}>Back</button>
        <button type="submit">Send Order</button>
      </div>
    </form>
  );
}
