/* eslint-disable react-hooks/exhaustive-deps */
import React , {useState , createContext , useEffect} from 'react'

export const cartContext = createContext(null)

export default function CartContext({ children }) {
    let Items = JSON.parse(localStorage.getItem("Items"))
    const [cartItems , setCartItems] = useState(Items || [])
    const [showCart , setShowCart] = useState(false)
    const [totalAmount, setTotalAmount] = useState("")
  
    const Toggle = () => {
        setShowCart(!showCart)
  }
  
    const StoreItems = () => {
      localStorage.setItem("Items" , JSON.stringify(cartItems))
  }

    useEffect(() => {
        StoreItems()
      },[cartItems])

      useEffect(() => {
        const total = cartItems.reduce((acc, product) => {
          return acc + product.price;
        }, 0);
        setTotalAmount(total);
      }, [cartItems]);
  
    const addToCart = (item) => {
        if (!cartItems.some((cartItem) => cartItem.name === item.name)) {
          setCartItems([...cartItems, item]);
      }
    }
    const remouveProduct = (productName) => {
        const updatedPanier = cartItems.filter((product) => product.name !== productName);
        setCartItems(updatedPanier);
    };

let CartContextValues = {
    Toggle,
    addToCart,
    cartItems,
    showCart,
    remouveProduct,
    totalAmount
}
  return (
    <cartContext.Provider value={CartContextValues}>
        {children}
    </cartContext.Provider>
  )
}
