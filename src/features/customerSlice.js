import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    phone: '',
};

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        setCustomerData: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
        },
    },
});

export const { setCustomerData } = customerSlice.actions;
export const selectCustomerData = (state) => state.customer; // Asegúrate de que el estado esté correctamente referenciado
export default customerSlice.reducer;