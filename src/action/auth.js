import { fetchSinToken, fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2';

export const startLogin = ( correo, password ) =>{
    return async ( dispatch ) => {
       
        const resp= await fetchSinToken('auth/login',{ correo, password },'POST');
        const body = await resp.json(); 
        console.log(body);
            
        if( resp.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
                
            dispatch( login({
                uid: body.uid,
                name: body.nombre,
                rol:body.rol
            }))
        } else {
            Swal.fire('Error', body.msg, 'error');
        }

    }
}
export const startRegister = ( email, password, name ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }


    }
}
export const GoogleLogin = ( correo, nombre ) =>{
    return async ( dispatch ) => {
       
        const resp= await fetchSinToken('auth/google',{ correo, nombre },'POST');
        const body = await resp.json(); 
        console.log(body);
            
        if( resp.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
                
            dispatch( login({
                uid: body.uid,
                name: body.nombre,
                rol:body.rol
            }))
        } else {
            Swal.fire('Error', body.msg, 'error');
        }

    }
}



export const startChecking = () =>{
    return async(dispatch) =>{
        const resp= await fetchConToken( 'auth/renew');
        const body = await resp.json();
       

        if(body.ok){
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date',new Date().getTime() );

            dispatch(login({
                uid: body.uid,
                name: body.nombre,
                rol: body.rol
            }))
        }else {
            
            dispatch (checkingFinish ());
        }



    }
}

 const checkingFinish= ()=>({
     type: types.authCheckingFinish
 });
    

const login = (user) =>({
    type: types.authLogin,
    payload:user
});

export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.authLogout })