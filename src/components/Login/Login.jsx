import React from 'react';

import './login.css';
import Fet from './img/Fet.jpg'
import email from './img/email.png';
import pass from './img/pass.png';
import  { useForm } from '../../hooks/useForm'
import  { useDispatch } from 'react-redux';
import {  startLogin } from '../../action/auth'
import { GoogleLogin } from 'react-google-login'; 

export const LoginScreen = () => {

   const dispatch = useDispatch();


  const [ formLoginValues, handleLoginInputChange ] = useForm({
    correo: 'nicolas@hotmail.com',
    lpassword: '123456'
});

  const {correo,lpassword} = formLoginValues;


  const handleLogin = ( e ) => {
    e.preventDefault();
    dispatch( startLogin( correo, lpassword ) );
}

  

  return (

    
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={Fet} alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h1>Bienvenido</h1>
          <form onSubmit={ handleLogin }> 
           <div>
             <img src={email} alt="email" className="email"/>
             <input 
             type="text"
              placeholder="Correo institucional" 
              className="name"
              name="correo"
              value={correo}
              onChange={ handleLoginInputChange }
              />
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input 
             type="password"
              placeholder="Contraseña"
              name='lpassword'
              value={ lpassword }
              onChange= {handleLoginInputChange }
               className="name"
               
               />
           </div>
          <div className="login-button">
          <input 
          type='submit'
          className='btnSubmit'
          value='Login'
          />
          </div>
            {/* <GoogleLogin
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    /> */}







    
           
        </form>
         </div>
       </div>
       

     </div>
    </div>
  );
}
