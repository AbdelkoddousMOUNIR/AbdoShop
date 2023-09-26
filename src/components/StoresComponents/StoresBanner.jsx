import React  from 'react'
import '../../styles/StoresBanner.css'
import { useNavigate } from 'react-router-dom'

export default function StoresBanner({Banner}) {
  let navigate = useNavigate()
  return (
    <div className='StoresBanner' id='Home'>
      <div className="container">
        <h3>{Banner.category }</h3>
        <h2>{Banner.type}</h2>
        <h1>{Banner.name}</h1>
        <button onClick={() =>{navigate(`/${Banner.category}/${Banner.name}`)}}>shop now</button>
      </div>
      <div className="imageContainer">
        <img src={Banner ? Banner.imgs[0] : ""} alt={Banner.name} />
      </div>
    </div>
  )
}
