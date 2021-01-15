import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <Link  class="nav-link active"to={"/brand"}>  
          <li class="nav-item active">
            Home
          </li>
          </Link >
          <Link class="nav-link" to={"/brand"}> 
          <li class="nav-item">
            Brands
          </li>
          </Link>
          <Link class="nav-link" to={"/customer"}> 
          <li class="nav-item">
            Customers
          </li>
          </Link>
          </ul>
          <Link class="nav-link" to={"/"}> 
          <span  class="navbar-text">
             Logout
             </span>
          </Link>

          {/* <Link to={"/brand/add"}> 
          <li class="nav-item">
            Add Brand
          </li>
          </Link>
          <Link to={"/customer"}> 
          <li class="nav-item">
            Add Customer
          </li>
          </Link> */}
       
      </nav> 
    )
}

export default Header
