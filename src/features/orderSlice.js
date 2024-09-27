// features/orderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    total: 0,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.items.find(item => item.id === product.id);
            if (existingProduct) {
                // Incrementar la cantidad si el producto ya existe en el carrito
                existingProduct.quantity += 1;
            } else {
                // Agregar el producto al carrito
                state.items.push({ ...product, quantity: 1 });
            }
            // Actualizar el total
            state.total += product.price;
        },
        removeProductToCart: (state, action) => {
            const productId = action.payload; // Se espera que se pase el ID del producto
            const existingProductIndex = state.items.findIndex(item => item.id === productId);
            if (existingProductIndex !== -1) {
                const product = state.items[existingProductIndex];
                state.total -= product.price * product.quantity; // Resta el total por la cantidad
                state.items.splice(existingProductIndex, 1); // Elimina el producto del carrito
            }
        },
        incrementProductQuantity: (state, action) => {
            const productId = action.payload; // ID del producto
            const existingProduct = state.items.find(item => item.id === productId);
            if (existingProduct) {
                existingProduct.quantity += 1; // Incrementa la cantidad
                state.total += existingProduct.price; // Actualiza el total
            }
        },
        decrementProductQuantity: (state, action) => {
            const productId = action.payload; // ID del producto
            const existingProduct = state.items.find(item => item.id === productId);
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1; // Decrementa la cantidad
                state.total -= existingProduct.price; // Actualiza el total
            }
        },
    }
});

// Exportar las acciones
export const { addProductToCart, removeProductToCart, incrementProductQuantity, decrementProductQuantity } = orderSlice.actions;

// Selector para obtener los datos del pedido
export const selectOrderInfo = (state) => state.order;

export default orderSlice.reducer;
