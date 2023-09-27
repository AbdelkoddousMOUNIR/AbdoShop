/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect , useContext} from 'react';
import "../styles/ProductDetails.css";
import { useParams } from 'react-router-dom';
import { productContext } from '../components/context/ProductContext';
import ImgsContainer from '../components/ProductDetailsComponents/ImgsContainer';
import DetailsContainer from '../components/ProductDetailsComponents/DetailsContainer';
import Form from '../components/ProductDetailsComponents/Form';

export default function ProductDetails({ products }) {
  let {getProduct , showForm , getNumber , getColor , getCheckedColor , getSize , getCheckedSize , getCheckedImg , changeImg , closeForm} = useContext(productContext)
  let { productName } = useParams();
  
  useEffect(() => {
    const selectedProduct = products.find((item) => item.name === productName);
    getProduct(selectedProduct);
    getNumber(1)
    getColor()
    getSize()
    getCheckedSize()
    getCheckedColor()
    getCheckedImg(0)
    changeImg()
    closeForm()
  }, [productName]);

  return (
    <div className='ProductDetails'>
      <ImgsContainer />
      {showForm ? <Form /> : <DetailsContainer />}
    </div>
  );
}