import {Routes,Route,BrowserRouter} from 'react-router-dom';
import { LoginScreen } from '../components/Login/Login';
import { Admin } from '../components/roles/Adm';
import { useDispatch, useSelector } from 'react-redux';
import React,{ useEffect, useId } from 'react';
import { startChecking } from '../action/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { SelectVideo } from '../components/beam/SelectVid';
import { Prestamo } from '../components/prestamo/prestamo';
import { Navigate} from 'react-router-dom'
import { Mostrar } from '../components/mostrar/mostrar';

export const AppRouters = () =>{


    const dispatch = useDispatch();
   const {checking,uid} = useSelector ( state => state.auth)
    useEffect (() => {
        dispatch(startChecking() );
    },[dispatch])

    if (checking){
        return <h5>espere....</h5>
    }
   
    

    return(
        <>
          <BrowserRouter>
            <Routes>
              <Route exact 
              path='/' element={ <PublicRoute uid={uid} >
                <LoginScreen/> 
              </PublicRoute>} />  

              <Route  path='/SelectVid' 
            element={  <PrivateRoute uid={uid}>
                < SelectVideo/>
                </PrivateRoute>  }  />
              <Route 
              path='/Adm'element={<Admin/>}/> 
              <Route path='/prestamo' element={<Prestamo/>} />
              <Route path='/mostrar' element={<Mostrar/>} />
            </Routes>

            

          </BrowserRouter>
        </>
      )
      
    }