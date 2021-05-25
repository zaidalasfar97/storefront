import React from 'react';
import { Provider } from 'react-redux';
import store from './store/active-categories';

import Header from './components/header';
import Categories from './components/categories';
import Products from './components/products';
import Footer from './components/footer';
import Cart from './components/cart';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Cart />
      <Categories />
      <Products />
      <Footer />
    </Provider>
  );
}

export default App;