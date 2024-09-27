import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './src/features/orderSlice';
import customerReducer from './src/features/customerSlice';

const store = configureStore({
    reducer: {
        order: orderReducer,
        customer: customerReducer,
    },
});

export default store;
