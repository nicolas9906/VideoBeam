
import React from "react";
import './SelectVid.css';
import blanco1 from '../beam/img/72.png';
import negro1 from '../beam/img/95.png';
import { Navbarr } from "../navbar/Navbar";
import { useAgregarStore } from "../../hooks/useAgregarStore";
import { useEffect } from "react";
import { usePrestamoStore } from "../../hooks/usePrestamoStore";
import { useUiStore } from "../../hooks/useUiStore";
import { PrestamoModal } from "./PrestamoModal";
import { onSetActiveAgregar } from "../../store";


export const SelectVideo= () =>{

  const{agregar, startLoadingAgregar } = useAgregarStore();
  const{ openDateModal}= useUiStore();
 



  const modal = (agregar) => {
    startLoadingAgregar(agregar)
    openDateModal();
    console.log(agregar);
  }





  useEffect (()=>{
    startLoadingAgregar()
  },[])

  

   
    return (
       
        <>
        <Navbarr/>
            <div className="content"><h2 id="subtitle">Videobeam de la institucion </h2></div>
            <div className='cards'>
             
            {agregar.map((agregar) => (
                <div  key={agregar.id}className="card">
                  <div className="face front">
                    <img src={blanco1}/> 
                    <h3>{agregar.nombre}</h3>
                  </div>
                  <div className="face back">
                    <h3>{agregar.nombre}</h3>
                    <p>
                        {agregar.descripcion}<br/>
                    </p>
                    <div> 
                      <button
                          onClick={()=>modal(agregar.nombre)}>solicitar </button>
                    </div>
                  </div>
                </div>
            ))}
                </div>

                <PrestamoModal/>


                
            </>


    )
}