
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

          <button>click me7</button>
          <h1>שלום עשיתי 2 שינויים!</h1>
          <h1>Git</h1><button>click me</button>
          <h1>Git</h1><button>click me!!</button>
          <h1>Git</h1>
          {/* <h1>User Details</h1> */}

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
