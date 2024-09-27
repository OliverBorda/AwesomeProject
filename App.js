import React from 'react';
import Routes from './src/routers/routes';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      {console.log('app')}
      <Routes />
    </Provider>
  );
}

export default App;