import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Navbar,Container } from 'react-bootstrap';
import { useAuthStore } from '../../hooks/useAuthStore';


export const Navbar2 = () => {

    const { startLogout, user } = useAuthStore();
    
    return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
              Menu
            </Link>


            <div className="navbar-collapse">
                <div className="navbar-nav">
                <NavLink 
                          
                          className={ ( {isActive}) => "nav-item nav-link" + (isActive ? 'active' : '')  }                   
                         
                          to="/agregar"
                      >
                          agregar
                      </NavLink>      
                    <NavLink 
                          
                        className={ ( {isActive}) => "nav-item nav-link" + (isActive ? 'active' : '')  }                   
                       
                        to="/mostrar"
                    >
                        mostrar
                    </NavLink>
                </div>
            </div>



            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                  <span className='nav-item nav-link text-info'>
                    {user.name}
                  </span>
                  <button 
            
            onClick={startLogout}
            >
            
                <span>Cerrar session</span>
            </button>
     
                </ul>
            </div>
        </nav>
          
    );
}
