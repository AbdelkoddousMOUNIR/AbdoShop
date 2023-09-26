import React , { useContext } from 'react'
import { productContext } from '../context/ProductContext'

export default function PersonnelDetails() {
    let {product , getColor , color , getSize , size , checkedColor , getCheckedColor , checkedSize , getCheckedSize} = useContext(productContext)
  return (
    <div className="personnelDetails">
              {product.colors ? 
              <div className="colors">
                  <h4>color : <span style={{ color: color}} >{color}</span></h4>
                <div className="allColors">
                  {product.colors ? product.colors.map((color, index) => (
                    <div className={`color ${index === checkedColor ? 'active' : ""}`} key={index} style={{ backgroundColor: color }} onClick={() =>
                    {
                      getColor(color)
                      getCheckedColor(index)
                    }}>
                  </div>)) : ""}
                </div>
              </div>
              : ""}
            {product.sizes ?
              <div className="sizes">
                <h4>size : <span style={{size : size}}>{size}</span></h4>
                <div className="allSizes">
                  {product.sizes ? product.sizes.map((size, index) => (
                    <span className={`size ${index === checkedSize ? 'active' : ""}`} key={index} onClick={() => {
                      getSize(size)
                      getCheckedSize(index)
                    }}>{size}</span>             
                  )) : ""}
                </div>
                </div>
             : ""}
    </div>
  )
}
