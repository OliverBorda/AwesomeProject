import React, { createContext, useState, useContext, useEffect } from 'react';

// Crear el contexto para los datos del cliente
const CustomerContext = createContext();

// Crear un proveedor para el contexto del cliente
export const CustomerProvider = ({ children }) => {
    const [customerData, setCustomerData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [renderTime, setRenderTime] = useState(null);

    // useEffect(() => {
    //     const startTime = global.performance.now(); // Tiempo de inicio
    //     console.log('CustomerContext renderizado en', startTime, 'ms');

    //     return () => {
    //         const endTime = global.performance.now(); // Tiempo de finalización
    //         setRenderTime(endTime - startTime);
    //         console.log('2 CustomerContext renderizado en', endTime - startTime, 'ms');
    //     };
    // }, []);

    return (
        <CustomerContext.Provider value={{ customerData, setCustomerData }}>
            {children}
        </CustomerContext.Provider>
    );
};

// Custom hook para usar el contexto del cliente
export const useCustomer = () => useContext(CustomerContext);
