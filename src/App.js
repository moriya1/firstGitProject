
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
      
          <h1>Git4</h1>
          
          <button>click me4</button>

          <UserDetails />
          <ProductDetails></ProductDetails>
      
        </div>
      </Provider>
    </>
  );

}

export default App;
