import React, { useEffect } from "react";
import './mostrar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Navbar2 } from "../navbar/navbar2";
import { useAuthStore, usePrestamoStore } from "../../hooks";







export const Mostrar =() =>{


    const{prestamo, startLoadingPrestamo } = usePrestamoStore();
    const{user} = useAuthStore();

    useEffect (()=>{
        startLoadingPrestamo()
      },[])
    return (
        <>
        <Navbar2/>    
        
        <h1>Videobean solicitados</h1>

        <table >
            <tr>
                <th scope="col">nombre</th>
                <th scope="col">nombre videobean</th>
                <th scope="col">fecha inicio </th>
                <th scope="col">fecha fin</th>
            </tr>

            {prestamo.map((prestamo) => (
                 <tr key={prestamo}>
                 <th scope="col">{prestamo.user.nombre}</th>
                 <th scope="col">{prestamo.nombrevideo}</th>
                 <th scope="col">{prestamo.start.toLocaleString()} </th>
                 <th scope="col">{prestamo.end.toLocaleString()}</th>
             </tr>
            ))}
             
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