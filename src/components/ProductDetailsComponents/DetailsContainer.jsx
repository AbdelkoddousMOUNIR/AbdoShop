import React , {useContext} from 'react'
import { productContext } from '../context/ProductContext'
import '../../styles/DetailsContainer.css'
import PersonnelDetails from './PersonnelDetails'
import { useNavigate } from 'react-router-dom'

export default function DetailsContainer() {
    let { product, totalePrice, getNumber , showFormEl } = useContext(productContext)
    let navigate = useNavigate()
  return (
    <div className='DetailsContainer'>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="container">
            <h3>price : {totalePrice} $</h3>
            <h3><input type="text" placeholder='num' onChange={(e) => getNumber(Number(e.target.value))} min={1}/> : quantitie</h3>
            </div>
            {(product.colors || product.sizes) ? <PersonnelDetails /> : ""}
            <div className="btns">
                <button onClick={() => {showFormEl()}}>pass order</button>
                <button onClick={() =>{navigate(`/${product.category}`)}}>continue shopping</button>
            </div> 
    </div>
  )
}
