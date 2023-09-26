import React , {useContext} from 'react'
import { productContext } from '../context/ProductContext'
import "../../styles/ImagesContainer.css"

export default function ImgsContainer() {
    let {displayedImage , product , changeImg , checkedImg , getCheckedImg} = useContext(productContext);
  return (
    <div className="ImagesContainer">
        <div className="imgViewer">
          <img src={displayedImage || (product.imgs ? product.imgs[0] : "")} alt={product.name}/>
        </div>
        <div className="allImages">
          {product.imgs ? product.imgs.map((image, index) => (
            <img src={image} className={index === checkedImg ? 'active' : ""} alt={product.name} key={index} onClick={() => {
              changeImg(index)
              getCheckedImg(index)
            }} />
          )) : ""}
        </div>
      </div>
  )
}
