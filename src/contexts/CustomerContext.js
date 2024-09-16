import React, { createContext, useState, useContext } from 'react';

// Crear el contexto para los datos del cliente
const CustomerContext = createContext();

// Crear un proveedor para el contexto del cliente
export const CustomerProvider = ({ children }) => {
    const [customerData, setCustomerData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    return (
        <CustomerContext.Provider value={{ customerData, setCustomerData }}>
            {children}
        </CustomerContext.Provider>
    );
};

// Custom hook para usar el contexto del cliente
export const useCustomer = () => useContext(CustomerContext);
