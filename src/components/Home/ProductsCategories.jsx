/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductsCategories.css';
import { productCategories } from './ProductCategories';

export default function ProductsCategories() {
  const [inputVal, setInputVal] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    filterCategories()
  }, [inputVal]);

  const filterCategories = () => {
    if (inputVal === '') {
      setSelectedCategories(productCategories);
    } else {
      const filteredCategories = productCategories.filter(category =>
        category.name.toLowerCase().startsWith(inputVal.toLowerCase())
      );
      setSelectedCategories(filteredCategories);
    }
  };
  
  return (
    <div className='ProductsCategories' id='productsCategories'>
      <div className='container'>
        <h1>Products Categories</h1>
        <input
          type='text'
          placeholder='Search for category!'
          value={inputVal}
          onChange={e => {
            setInputVal(e.target.value);
          }}
        />
      </div>
      <div className="ProductsContainer">
        {selectedCategories.length === 0 ? <h1>no categorie found !</h1> : selectedCategories.map(category => (
            <Link to={`/${category.name}`}key={category.id}>
              <img src={category.img} alt={category.name} />
              <h3>{category.name}</h3>
            </Link>
        ))}
      </div>
    </div>
  );
}






