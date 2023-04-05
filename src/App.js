import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  About,
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  Products,
  PrivateRoute,
  AuthWrapper,
  SharedLayout,
} from './pages';

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<SingleProduct />} />
            <Route
              path='/checkout'
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
