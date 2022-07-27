import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { useAuthStore } from '../../hooks/useAuthStore';
export const Navbarr = () => {

    const { startLogout, user } = useAuthStore();
    return (
        


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          
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
