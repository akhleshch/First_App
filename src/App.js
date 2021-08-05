import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route ,Switch} from 'react-router-dom';
import ShopPage from './shop/shop.component';
 
 export function App() {
  return (

  // <HomePage/>  
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/shop' component={ShopPage} />
  </Switch>

  );
}

export default App;
