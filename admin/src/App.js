import './App.css';
import React from 'react'
import Form from './Form';
import SignUp from './components/SignUp/SignUp';
import Brand from './container/Brand'
import Customer from './container/Customer';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Header from './components/header/Header'
import ProtectedRoute from './ProtectedRoute'
import Admin from './components/Admin/Admin'


function App() {
  return (

  
    <Router> 
    <div className="App">
      

      <Switch>
      {/* <Header />    */}
    <Route  exact path='/' component={Admin}/>  
    <ProtectedRoute path='/brand' component={Brand} />
    <ProtectedRoute path ="/customer" component={Customer} />
  
    
    {/* <Form /> */}
    {/* <Brand /> */}

      {/* <Customer /> */}

    {/* <SignUp>

  Add Customer
    </SignUp> */}
  </Switch>
    </div>
    </Router>
  );
}

export default App;
