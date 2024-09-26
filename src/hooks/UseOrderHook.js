import { useEffect, useState } from 'react'

const cart = []
const UseOrderHook = () => {
    
    const [OrderData, setOrderData] = useState({
        DataCustomer: {},
        cart: []
    })

    const addToCart = (product) => {
        product.quantity = 1
        cart.push(product)
    }

    const removeCart = (id) => {
        let newCart = OrderData.cart.filter((product)=>product.id!==id)
        setOrderData(
            {
                ...OrderData,
                cart:  newCart
            }
        )
    }

    const incrementQuantity = (id) => {
        let product = OrderData.cart.find((product)=>product.id==id)
        product.quantity = product.quantity + 1
        let newCart = OrderData.cart.filter((product)=>product.id!==id)
        newCart.push(product)
        setOrderData(
            {
                ...OrderData,
                cart:  newCart
            }
        )
    }

    const decrementQuantity = (id) => {
        let product = OrderData.cart.find((product)=>product.id==id)
        product.quantity = product.quantity > 0 ? product.quantity - 1 : 0
        let newCart = OrderData.cart.filter((product)=>product.id!==id)
        newCart.push(product)
        setOrderData(
            {
                ...OrderData,
                cart:  newCart
            }
        )
    }

    const addToOrder = ()=>{
        setOrderData({...OrderData, cart})
    }

    const clearCart = ()=>{
        cart = [],
        setOrderData({
            DataCustomer: {},
            cart: []
        })
    }

    return {
        addToCart,
        OrderData,
        clearCart,
        removeCart,
        addToOrder,
        incrementQuantity,
        decrementQuantity,
        cart,
    }
}

export default UseOrderHook