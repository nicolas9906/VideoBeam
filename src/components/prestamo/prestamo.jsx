import { Navbarr } from '../navbar/Navbar';
import React,{ useState } from "react";
import {Link} from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startRegister } from '../../action/auth'
import Swal from 'sweetalert2';




export const Prestamo = ()=>{
  const dispatch = useDispatch();
    
  const [ formRegisterValues, handleRegisterInputChange ] = useForm({
      names: '',
      email: '',
      password: '',
      repassword: ''
  });
  const { name, email, password, repassword } = formRegisterValues;
  const handleRegister = ( e ) => {
      e.preventDefault();
      dispatch( startRegister( name, email,password,repassword ) );
      if ( password !== repassword ) {
          return Swal.fire('Error', 'Las contraseñas deben de ser iguales','error');
      }



    return (

     
	
    

    <>
        <Navbarr/>
        <div className="main-registro">
        <div className="sub-main-registro">
        <form onSubmit={ handleRegister }>

        <div className="input-email">
            <label htmlFor='email'></label>
            <input 
            type='text'
            placeholder="Nombre" 
             name='name'
             value={name} 
             onChange={ handleRegisterInputChange }
            className="name"
            />
            </div>
            <div className="input-email">
            <label htmlFor='email'></label>
            <input 
            type='email'
            placeholder="Correo institucional"
             id='email' 
             name='email'
             value={email} 
             onChange={ handleRegisterInputChange} 
            className="name"
            />
            </div>

               <br></br> 

            <div className="input-password">
            <label htmlFor='password'></label>
            <input 
            type='password'
            placeholder="Contraseña" 
             name='passoword'
             value={repassword}
              onChange={ handleRegisterInputChange}
            className="password"
            />

            </div>
            <br></br>
            <div className="input-password">
            <label htmlFor='password'></label>
            <input 
            type='password'
            placeholder="repite Contraseña" 
             name='repassoword'
             value={password}
              onChange={ handleRegisterInputChange}
            className="password"
            />

            </div>

            <br></br>


            
        </form>
        
        </div>
        
        </div>
        
        </>
	
   
       )
}
}
