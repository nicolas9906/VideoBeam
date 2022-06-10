import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startLogout } from '../../action/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Navbar,Container } from 'react-bootstrap';
import './Navbar.css';
export const Navbarr = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );
        const navigate= useNavigate();
    const handleLogout = () => {
        dispatch( startLogout() );
        navigate('/')
    }

    return (
        


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-fluid">
               
                     
                  



            
                     
                

            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                  <span className='nav-item nav-link text-info'>
                    {name}
                  </span>
                  <button 
            
            onClick={handleLogout}
            >
            
                <span>Cerrar session</span>
            </button>
     
                </ul>
            </div>
        </nav>
          
    );
}
