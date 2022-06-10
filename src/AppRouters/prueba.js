 import {Route,Routes} from 'react-router-dom'



 function RootRouter() {

      return ( 
          <>
          <Router> {isLoggedIn ? <PrivateRouter/> : <PublicRouter />} </Router> 
            
          </div> ); }


                    function PrivateRouter(props) { 
                     return ( 
                        <div>
                        
                     
                      <Routes>
                       <Route path="/" exact element={<Home />} />
                        <Route path="/add" element={<Add />} /> 
                        <Route path="/update/:id" element={<Add />} /> 
                        <Route path="/view/:id" element={<Employee />} /> </Routes> </div> ); 
                    } 
                        
                        function PublicRouter() { 
                            return (
                                <Routes> 
                                <Route path="/" element={<Login />} /> </Routes> );
                             }
                            
                             </>
                             