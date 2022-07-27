import React, { useState, useEffect } from "react";
import { Navbar2 } from "../navbar/navbar2";
import { useAgregarStore } from "../../hooks/useAgregarStore"; 
    







export const Agregarr = ()=>{


    const [ formSubmitted, setFormSubmitted ] = useState(false);
    const { activeAgregar, startSavingAgregar } = useAgregarStore();
 
        const [formValues, setFormValues] = useState( { 
                nombre: '',
                descripcion: '',
                img: ''
                    } );



        const { nombre, descripcion } = formValues;
        const [ nombreValid, setNombreValid ] = useState(true);
        const [ descripcionValid, setDescripcionValid ] = useState(true);



                    
        useEffect(() => {
            if ( activeAgregar !== null ) {
                setFormValues({ ...activeAgregar });
            }    
            
          }, [ activeAgregar ])

    const handleInputChange = ({target}) =>{
        setFormValues({
            ...formValues,
            [target.name]:target.value,
            
        });
    }
        
    const handleSubmitForm =  async(e) =>{
        e.preventDefault();
        setFormSubmitted(true);

        if(nombre.trim().length<5){
       
            return setNombreValid(false);
        }
        setNombreValid(true);

        if(descripcion.trim().length<5){
            return setDescripcionValid(false);
        }
       console.log(formValues);


       await startSavingAgregar( formValues );
       setFormSubmitted(false);

    };


 
    return (
        <>
        <Navbar2/>


 
        <h1> Implemento evento </h1>

<form
 className="container"
 onSubmit={handleSubmitForm}
 >
    
    <div className="form-group mb-2">
        <label>Titulo</label>
        <input 
            type="text" 
            className={`form-control ${ !nombreValid && 'is-invalid' }`}
            placeholder="Título del evento"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
            autoComplete="off"
        />
        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
    </div>

    <div className="form-group mb-2">
        <textarea 
            type="text" 
            className={`form-control ${ !descripcionValid && 'is-invalid' }`}
            placeholder="Notas"
            rows="5"
            name="descripcion"
            value={descripcion}
            onChange={handleInputChange}
        ></textarea>
        
    </div>

    <div className=" form-gropu mb-2">
                 <label forhtml="formFile" className="form-label">Selecciona imagen</label>
                <input className="form-control" type="file" name="img"
                onChange={handleInputChange}
                />
        </div>

    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>

    </form>


          
        </>
    )
}
