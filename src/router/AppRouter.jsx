import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginScreen } from '../components/Login/Login';
import { SelectVideo } from '../components/beam/SelectVid';
import { useAuthStore } from '../hooks/useAuthStore';
import {PrivateRoute} from '../router/PrivateRoute';
import { Admin } from '../components/roles/Adm';
// import { Prestamo } from '../components/prestamo/prestamo';
import { Agregarr } from '../components/agregar/agregar';
import { Mostrar } from '../components/mostrar/mostrar';


export const AppRouter = () => {

  
    const { status, checkAuthToken,user } = useAuthStore();
    // const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

    useEffect(() => {
        checkAuthToken();
    }, [])
    


    if ( status === 'checking' ) {
        return (
            <h3>Cargando...</h3>
        )
    }

    

    
    return (
        
        <Routes>
            {
                ( status === 'not-authenticated')  
                    ? (
                        <>
                            <Route path="/*" element={ <LoginScreen /> } />
                            <Route path="/*" element={ <Navigate to="/" /> } />
                        </>
                    )
                     : (
                        
                        <>
                        {(user.rol === 'ADMIN_ROLE')
                        ?(
                            <>
                                <Route 
                                path='/*'
                                element={ <PrivateRoute rol={'ADMIN_ROLE'}>
                                <Admin/>
                                </PrivateRoute>} /> 
                                {/* <Route path='/prestamo' element={<Prestamo/>} /> */}
                                <Route path='/mostrar' element={<Mostrar/>} />
                                <Route path='/agregar' element={<Agregarr/>} />
                                </>
                        )
                        :(
                                <>
                                     <Route path='/*' element={< SelectVideo/>} />
                                </>
                        )
                        }
                               
                        </>
                        )
                       
                    
            }
            

        </Routes>
    )
}
