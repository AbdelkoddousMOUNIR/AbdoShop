/* eslint-disable react-hooks/exhaustive-deps */
import React , {useState , createContext} from 'react'

export const productContext = createContext(null)

export default function ProductContext({ children }) {
  const [product , setProduct] = useState({})
  let [displayedImage, setDisplayedImage] = useState("")
  let [checkedImg, setCheckedImg] = useState(0)
  let [checkedColor, setCheckedColor] = useState()
  let [checkedSize, setCheckedSize] = useState()
  let [color , setColor] = useState()
  let [size, setSize] = useState()
  let [number, setNumber] = useState(1)
  let [showForm , setShowForm] = useState(false)
  let totalePrice = (product.price * number) ;
  
  let getProduct = (product) => {
    setProduct(product)
  }
  let changeImg = (e) => {
    setDisplayedImage(product.imgs ? product.imgs[e] : "");
  };
  let getCheckedImg = (e) => {
    setCheckedImg(e)
  }
  let getCheckedColor = (e) => {
    setCheckedColor(e)
  }
  let getCheckedSize = (e) => {
    setCheckedSize(e)
  }
  let getColor = (e) => {
    setColor(e)
  }
  let getSize = (e) => {
    setSize(e)
  }
  let getNumber = (e) => {
    if ( e > 0) {
      setNumber(e)
    } else {
      setNumber(1)
    }
  }
  let showFormEl = () => {
    setShowForm(!showForm)
  }
  let closeForm = () => {
    setShowForm(false)
  }

  let productContextContextValues = {
    getProduct,
    changeImg,
    getCheckedImg,
    getColor,
    getNumber,
    getSize,
    showFormEl,
    getCheckedColor,
    getCheckedSize,
    closeForm,
    displayedImage,
    totalePrice,
    color,
    size,
    checkedImg,
    product,
    showForm,
    checkedColor,
    checkedSize,
    number,
  }
  return (
    <productContext.Provider value={productContextContextValues}>
        {children}
    </productContext.Provider>
  )
}