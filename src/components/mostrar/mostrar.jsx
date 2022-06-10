import { Navbarr } from "../navbar/Navbar";
import React from "react";
import './mostrar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'




export const Mostrar =() =>{


    return (
<>
        <Navbarr/>    
        <h1>Videobean solicitados</h1>

        <table className="">
            <tr>
                <th scope="col">nombre</th>
                <th scope="col">nombre videobean</th>
                <th scope="col">fecha inicio </th>
                <th scope="col">fecha fin</th>
            </tr>
            
             
        </table>
        <button style={{position: 'fixed', top: '50%', right: 0}}>
                     <Link     
                         className={ ( {isActive}) => "lg" + (isActive ? 'active' : '')  }                   
                        
                         to="/Adm"
                     >
                         Menu
                     </Link>
                     </button>
                    
</>



    )
}