import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid ">
    <Link className="navbar-brand  " to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item " role="tabpanel">
          <Link className="nav-link nav-pills" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item  "role="tabpanel">
          <Link className="nav-link  nav-pills" to="/about">{props.about}</Link>  
        </li>
        
       {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
  </ul>
        </li>
  */}
  
  
        </ul>
        
        <form className="d-flex mx-0 me-2" role="search">
        <input className="form-control  " type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-primary " type="submit">Search</button>
        
      </form> 
      <div className={` form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
  <input className=" form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
      
      
    </div>
    

  </div>
  
</nav>  
    
  )

}
Navbar.propTypes={
  title:PropTypes.string,
  about:PropTypes.string
 } //it used to set tyoes of props & prevent error like if we pass number show error in console
Navbar.defaultProps={
  title:'Set title',
  about:'About us'
} // if we don't pass any props in Navbar then it bydefault it takes these values.