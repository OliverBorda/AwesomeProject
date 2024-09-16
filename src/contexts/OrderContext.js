import React, { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orderInfo, setOrderInfo] = useState({
        items: [],
        total: 0,
    });

    return (
        <OrderContext.Provider value={{ orderInfo, setOrderInfo }}>
            {children}
        </OrderContext.Provider>
    );
};

// Custom hook para usar el contexto de la orden
export const useOrder = () => useContext(OrderContext);
