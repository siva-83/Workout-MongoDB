import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginHeader.css'

function LoginHeader() {

    const navigate = useNavigate()

    const goToLandPage = () =>{
        navigate('/')
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-light background">
        <div className="container-fluid">
            <h1 className="nav-title" onClick={goToLandPage}><img src="https://p.kindpng.com/picc/s/160-1601328_fitness-icon-png-transparent-png.png" className="logo" alt='workout logo'/>Workout</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav nav-items">

            <Link to="/about" className="link"><p className="nav-bar">About</p></Link>
            <Link to="/contact" className="link"><p className="nav-bar">Contact Us</p></Link>
                <Link to="/login" className='link' ><p className="nav-bar">Login</p></Link>
                {/* <Link to="/register" className="link"><p className="nav-bar">Register</p></Link> */}
            </div>
            </div>
        </div>
    </nav>
  )
}

export default LoginHeader