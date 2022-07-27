



import { useMemo, useState, useEffect } from 'react';
import { addHours, differenceInSeconds, set } from 'date-fns';

import './PrestamoModal.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Modal from 'react-modal';

import es from 'date-fns/locale/es';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


import { usePrestamoStore,useUiStore,useAgregarStore } from '../../hooks/index';
import { prestamoSlice } from '../../store';
import { onLoadAgregar } from '../../store';
import {modal} from '../beam/SelectVid'
import { useDispatch } from 'react-redux';
registerLocale( 'es', es );



Modal.setAppElement('#root');

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

export const PrestamoModal = ({modal}) => {

    const { isDateModalOpen, closeDateModal } = useUiStore();
    const { activePrestamo, startSavingPrestamo } = usePrestamoStore();
    const { agregar, startLoadingAgregar } = useAgregarStore();
    const [ formSubmitted, setFormSubmitted ] = useState(false);

    const [formValues, setFormValues] = useState({
        nombrevideo: '',
        estado:false,
        start: new Date(),
        end: addHours( new Date(), 1),
    });

    const {nombrevideo}=formValues;
    const [nombrevid,setnombreVid] =useState(true);
    
    

    useEffect(() => {
      if ( activePrestamo !== null ) {
          setFormValues({ ...activePrestamo });
      }     
    }, [ activePrestamo ])
    

    useEffect (()=>{
        startLoadingAgregar(agregar.id);
        onLoadAgregar();
      },[agregar.nombre])
    

    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onDateChanged = ( event, changing ) => {
        setFormValues({
            ...formValues,
            [changing]: event
        })
    }

    const onCloseModal = () => {
        closeDateModal();
    }


    const onSubmit = async( e ) => {
        e.preventDefault();
        setFormSubmitted(true);

        const difference = differenceInSeconds( formValues.end, formValues.start );
        
        if ( isNaN( difference ) || difference <= 0 ) {
            Swal.fire('Fechas incorrectas','Revisar las fechas ingresadas','error');
            return;
        }
        
        if ( nombrevideo.trim().length<4 ){
        return setnombreVid(false);
        }
        setnombreVid(true);
        console.log(formValues);

        // TODO: 
        await startSavingPrestamo( formValues );
        closeDateModal();
        setFormSubmitted(false);
    }



  return (
    <Modal
        isOpen={ isDateModalOpen }
        onRequestClose={ onCloseModal }
        style={ customStyles }
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={ 200 }
    >
        <h1> Solicitar Prestamo </h1>
        <hr />
        <form className="container" onSubmit={ onSubmit }>

            <div className="form-group mb-2">
                <label>Fecha y hora inicio</label>
                <DatePicker 
                    selected={ formValues.start }
                    onChange={ (event) => onDateChanged(event, 'start') }
                    className="form-control"
                    dateFormat="Pp"
                    showTimeSelect
                    locale="es"
                    timeCaption="Hora"
                />
            </div>

            <div className="form-group mb-2">
                <label>Fecha y hora fin</label>
                <DatePicker 
                    minDate={ formValues.start }
                    selected={ formValues.end }
                    onChange={ (event) => onDateChanged(event, 'end') }
                    className="form-control"
                    dateFormat="Pp"
                    showTimeSelect
                    locale="es"
                    timeCaption="Hora"
                />
            </div>

            <hr />
            <div className="form-group mb-2">
                <label>Videobean</label>
                <input      
             
                    type="text" 
                    className={ `form-control `}
                    placeholder=  {agregar.nombre}
                    name="nombrevideo"
                    autoComplete="off"
                    value={nombrevideo}
                    onChange={ onInputChanged }
                    
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
    </Modal>
  )
}