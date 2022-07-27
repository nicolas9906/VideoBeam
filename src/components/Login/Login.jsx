import React, { useEffect } from 'react';

import './login.css';
import Fet from './img/Fet.jpg'
import email from './img/email.png';
import pass from './img/pass.png';
import Swal from 'sweetalert2';
import  { useAuthStore } from '../../hooks/useAuthStore';
import {useForm} from '../../hooks/useForm';



const loginFormFields = {
  correo:    '',
  lpassword: '',
}

export const LoginScreen = () => {


  const { startLogin, errorMessage} = useAuthStore();

  const { correo, lpassword, onInputChange:onLoginInputChange } = useForm( loginFormFields );
  

  const loginSubmit = ( event ) => {
      event.preventDefault();
      startLogin({ correo: correo, password:lpassword });
  }


  useEffect(() => {
    if ( errorMessage !== undefined ) {
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }    
  }, [errorMessage])



//    const dispatch = useDispatch();


//   const [ formLoginValues, handleLoginInputChange ] = useForm({
//     correo: '',
//     lpassword: ''
// });

//   const {correo,lpassword} = formLoginValues;


//   const handleLogin = ( e ) => {
//     e.preventDefault();
//     dispatch( startLogin( correo, lpassword ) );
// }

  

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
          <form onSubmit={ loginSubmit }> 
           <div>
             <img src={email} alt="email" className="email"/>
             <input 
             type="text"
              placeholder="Correo institucional" 
              className="name"
              name="correo"
              value={correo}
              onChange={ onLoginInputChange }
              />
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input 
             type="password"
              placeholder="Contraseña"
              name='lpassword'
              value={ lpassword }
              onChange= {onLoginInputChange }
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
