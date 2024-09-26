import React from 'react';
import Routes from './src/routers/routes';
import { CustomerProvider } from './src/contexts/CustomerContext'; // Ajusta la ruta según tu estructura
import { OrderProvider } from './src/contexts/OrderContext'; // Ajusta la ruta según tu estructura

export default function App() {
  return (
    <CustomerProvider>
      <OrderProvider>
        {console.log('app')}
        <Routes />
      </OrderProvider>
    </CustomerProvider>
  );
}