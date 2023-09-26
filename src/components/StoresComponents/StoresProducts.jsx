/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect , useContext } from 'react';
import '../../styles/StoresProducts.css';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartContext';

export default function StoresProducts({ data, Inputdata}) {
  let {addToCart} = useContext(cartContext)
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {
    filterProducts();
  }, [Inputdata, data]);

  const filterProducts = () => {
    if (Inputdata === '') {
      setSelectedProduct(data);
    } else {
      const filteredProducts = data.filter((product) =>
        product.name.toLowerCase().startsWith(Inputdata.toLowerCase())
      );
      setSelectedProduct(filteredProducts);
    }
  };
  return (
    <div className={`StoresProducts ${Inputdata.length > 0 ? "marginTop" : ""}`} id='StoresProducts'>
      <div className='products'>
        {selectedProduct.length > 0 ? selectedProduct.map((product) => (
          <div className='container' key={product.id}>
            <Link to={`/${product.category}/${product.name}`}>
              <img src={product.imgs[0]} alt={product.name} />
              <h2>{product.name} : { product.price}$</h2>
            </Link>
            <div className='shopCart'>
              <button>
                <Link to={`/${product.category}/${product.name}`}>order now</Link>
              </button>
              <button
                className='btn'
                onClick={() =>{addToCart(product)}}
              >
                add to cart
              </button>
            </div>
          </div>
        )) : <h2>no product found !</h2>}
      </div>
    </div>
  );
}