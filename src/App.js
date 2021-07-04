
import './App.css';
import React from "react";
import UserDetails from './Component/userDetails'
import ShowUserDetails from './Component/showUserDetails'
import ShowBooks from './Component/showBooks'
import AddOrRemoveBook from './Component/addOrRemoveBook'
import ProductDetails from './Component/productDetails'

import { Provider } from 'react-redux'
import store from './Redux/Store/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <div style={{ textAlign: "center" }}>
          <h1>User Details</h1>
          <h1>Git</h1>
          <h1>Git3</h1>
          <UserDetails />
          <ShowUserDetails></ShowUserDetails>
          <ProductDetails></ProductDetails>
          {/* <h1>Books</h1>
          <ShowBooks></ShowBooks> */}
        </div>
      </Provider>
    </>
  );

}

export default App;
