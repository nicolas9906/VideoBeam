import { useState } from "react";
import React from "react";
import './SelectVid.css';
import blanco1 from '../beam/img/72.png';
import negro1 from '../beam/img/95.png';
import moment from "moment";

import { Link, NavLink, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector, useDispatch } from 'react-redux'
import { startLogout } from '../../action/auth';
import { Navbarr } from "../navbar/Navbar";


export const SelectVideo= () =>{
  

   
    return (
       
        <>
        <Navbarr/>
            <div class="content"><h2 id="subtitle">Videobeam de la institucion</h2></div>
            <div class='cards'>
                <body>
                <div className="card">
                  <div className="face front">
                    <img src={blanco1}/> 
                    <h3>MO-01-00272</h3>
                  </div>
                  <div className="face back">
                    <h3>MO-01-00272</h3>
                    <p>
                    3.500 lumens blanco <br/>
                        3.500 lumens color <br/>
                        Resolución XGA, HDMI   
                    </p>
                    <div className="link"> 
                      <a href="#">detalles</a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="face front">
                    <img src={blanco1}/> 
                    <h3>MO-01-00274</h3>
                  </div>
                  <div className="face back">
                    <h3> MO-01-00274</h3>
                    <p>
                    3.500 lumens blanco <br/>
                        3.500 lumens color <br/>
                        Resolución XGA, HDMI 
                    </p>
                    <div className="link"> 
                        <a href="#">detalles</a>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="face front">
                    <img src={negro1}/> 
                    <h3>MO-01-00095</h3>
                  </div>
                  <div className="face back">
                    <h3>MO-01-00095</h3>
                    <p> 
                    3.000 lumens blanco <br/>
                        3.000 lumens color <br/>
                        Resolución XGA, HDMI 
                    </p>
                    <div className="link"> 
                      <a href="#">detalles</a>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="face front">
                    <img src={blanco1}/> 
                    <h3>MO-01-00273</h3>
                  </div>
                  <div className="face back">
                    <h3>MO-01-00273</h3>
                    <p>   3.500 lumens blanco <br/>
                        3.500 lumens color <br/>
                        Resolución XGA, HDMI
                    </p>
                    <div className="link"> 
                      <a href="#">detalles</a>
                    </div>
                  </div>
                </div>


                <div className="card">
                  <div className="face front">
                    <img src={negro1}/> 
                    <h3>391-01-0001</h3>
                  </div>
                  <div className="face back">
                    <h3>391-01-0001</h3>
                    <p>   3.500 lumens blanco <br/>
                        3.500 lumens color <br/>
                        Resolución XGA, VGA
                    </p>
                    <div className="link"> 
                      <a href="#">detalles</a>
                    </div>
                  </div>
                </div>



                </body>
                </div>
               
            
            </>


    )
}