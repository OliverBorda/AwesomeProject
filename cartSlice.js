
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading:false,
  isLogged: false,
 products : [
    { id: 1, name: "Smartphone", description: "Latest model", price: 999, image: "https://via.placeholder.com/150", category: 1 },
    { id: 2, name: "Laptop", description: "Powerful performance", price: 1299, image: "https://via.placeholder.com/150", category: 1 },
    { id: 3, name: "T-shirt", description: "Comfortable cotton", price: 19.99, image: "https://via.placeholder.com/150", category: 2 },
    { id: 4, name: "Jeans", description: "Classic fit", price: 49.99, image: "https://via.placeholder.com/150", category: 2 },
    { id: 5, name: "Book 2", description: "Book", price: 29.99, image: "https://via.placeholder.com/150", category: 3 },
    { id: 6, name: "Book 1", description: "Book", price: 29.99, image: "https://via.placeholder.com/150", category: 3 },
    { id: 7, name: "Mower", description: "Mower", price: 199.99, image: "https://via.placeholder.com/150", category: 4 },
    { id: 8, name: "Table", description: "Table", price: 69.99, image: "https://via.placeholder.com/150", category: 4 }
],


  shoppingCart: [],
  categories: 1,
  screen: 1,
  previousScreen: 1,
  grandTotal: 0,
  memo: [1],
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    setScreen: (state, action) => {
      state.screen = action.payload;
      const existingScreen = state.screen;
      const ultimoElemento = state.memo[state.memo.length - 1];
      if (existingScreen  !== ultimoElemento) {
        state.memo.push(action.payload);
      }
      console.log(state.memo,"memo")
    },
    setCategories: (state, action) => {
        state.categories = action.payload;
      },
    goBack: (state) => {
     state.memo.pop(state.memo.length-1)
     state.screen=state.memo[state.memo.length-1]
     console.log(state.screen, "screen")
     console.log(state.memo,"memo")
    },


  




    setIsLoggedinToTrue: (state) => {
      state.isLogged = true;
    },
    setIsLoggedinToFalse: (state) => {
      state.isLogged = false;
    },

    setLoaderToTrue: (state) => {
      state.loading = true;
    },
    setLoaderToFalse: (state) => {
      state.loading = false;
    },
    
    addTocart: (state, action) => { 
      const productToAdd = action.payload;
      const existingProduct = state.shoppingCart.find(item => item.id === productToAdd.id);   
      if (existingProduct) {
     
        existingProduct.quantity += 1;
        existingProduct.totalPrice = existingProduct.price * existingProduct.quantity;
      } else {
    
        const newProduct = {
          ...productToAdd,
          quantity: 1,
          totalPrice: productToAdd.price
        };
        state.shoppingCart.push(newProduct);
      }
      state.grandTotal = state.shoppingCart.reduce((acc, item) => acc + item.totalPrice, 0);
   
    }, 
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.shoppingCart.find(item => item.id === productId);
      if (product) {
        if (product.quantity < 10) { 
          product.quantity += 1;
          product.totalPrice = product.price * product.quantity;
        }
      }
      state.grandTotal = state.shoppingCart.reduce((acc, item) => acc + item.totalPrice, 0);
    },

    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.shoppingCart.find(item => item.id === productId);
      if (product) {
        if (product.quantity > 1) { 
          product.quantity -= 1;
          product.totalPrice = product.price * product.quantity;
        } 
      }
      state.grandTotal = state.shoppingCart.reduce((acc, item) => acc + item.totalPrice, 0);
    },
    clearShoppingCart: (state ) => {
  state.shoppingCart = [];
  state.grandTotal = 0;
    },
    removeFromcartByID: (state, action) => {
      let productId = action.payload;
      console.log("idredux", action.payload )


      productId = parseInt(productId, 10); 

              state.shoppingCart = state.shoppingCart.filter( (item) => item.id !== productId);
              state.grandTotal = state.shoppingCart.reduce((acc, item) => acc + item.totalPrice, 0);

    },
    decreaseQuantityByIdandqty: (state, action) => {


      const productId = action.payload.id;
      let productQty = action.payload.quantity;
      productQty= parseInt(productQty, 10);



   




      const product = state.shoppingCart.find(item => item.id === productId);
      if (product) {
        if (product.quantity >1 ) { 
          product.quantity -= productQty;
          product.totalPrice = product.price * product.quantity;
        } 
      }
      state.grandTotal = state.shoppingCart.reduce((acc, item) => acc + item.totalPrice, 0);
    },
    addTocartByProductandQtyV2: (state, action) => {
 
      const productId = parseInt(action.payload.product_id, 10); 
      let qty = parseInt(action.payload.quantity, 10);    
      function getProductDetails(product_id) {
        return state.products.find(product => product.id === product_id);
      }  
      const productDetails = getProductDetails(productId);
      if (!productDetails) {
        console.log('No Product found');
      } 
    const existingProduct = state.shoppingCart.find(item => item.id === productId);   
      if (existingProduct) { 
        existingProduct.quantity += qty;
        existingProduct.totalPrice = existingProduct.price * existingProduct.quantity;
      } else {
    
        const newProduct = {
          ...productDetails,
          quantity: qty,
          totalPrice: productDetails.price
        };
        state.shoppingCart.push(newProduct);
      }
      state.grandTotal = state.shoppingCart.reduce((acc, item) => acc + item.totalPrice, 0);
    },
    addProduct: (state, action) => {
      const newProducts = action.payload;
      state.products = newProducts;
    },
    
  
  

  },

});

export const { 
  setCategories,
  setScreen,
  goBack,
  setIsLoggedinToTrue,
  setIsLoggedinToFalse,
  setLoaderToTrue,
  setLoaderToFalse,
  increaseQuantity, 
  decreaseQuantity,
  decreaseQuantityByIdandqty,
   addTocart, 
   removeFromcart,
   removeFromcartByID,
   addTocartByProductandQtyV2,
   clearShoppingCart,
   addProduct
   } = cartSlice.actions;







export default cartSlice.reducer;
















