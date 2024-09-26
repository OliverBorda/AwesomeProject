import React, { createContext, useState, useContext, useEffect } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orderInfo, setOrderInfo] = useState({
        items: [],
        total: 0,
    });
    const [renderTime, setRenderTime] = useState(null);

    // useEffect(() => {
    //     const startTime = global.performance.now(); // Tiempo de inicio
    //     console.log('OrderContext renderizado en', startTime, 'ms');
    //     return () => {
    //         const endTime = global.performance.now(); // Tiempo de finalización
    //         setRenderTime(endTime - startTime);
    //         console.log('2 OrderContext renderizado en', endTime - startTime, 'ms');
    //     };
    // }, []);

    return (
        <OrderContext.Provider value={{ orderInfo, setOrderInfo }}>
            {children}
        </OrderContext.Provider>
    );
};

// Custom hook para usar el contexto de la orden
export const useOrder = () => useContext(OrderContext);
