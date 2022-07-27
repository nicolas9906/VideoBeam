import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { Api } from '../api';
import { convertEventsToDateEvents } from '../helpers';
import { onSetActiveAgregar, onAddNewAgregar, onUpdateAgregar,onLoadAgregar,onDeleteAgregar } from '../store/index';



export const useAgregarStore = () => {
  
    const dispatch = useDispatch();
    const { agregar, activeAgregar } = useSelector( state => state.agregar );
    const { user } = useSelector( state => state.auth );

    const setActiveAgregar = ( agregar ) => {
        dispatch( onSetActiveAgregar( agregar ) )
    }

    const startSavingAgregar = async( agregar ) => {
        
        try {
            if( agregar.id ) {
                // Actualizando
                await Api.put(`/agregar/${ agregar.id }`, agregar );
                dispatch( onUpdateAgregar({ ...agregar, user }) );
                return;
            } 
    
            // Creando

            const { data } = await Api.post('/agregar', agregar );
            dispatch( onAddNewAgregar({ ...agregar, id: data.agregar.id, user }) );
            Swal.fire('Guardado en base de datos')

        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }

       
        
    }

    const startDeletingAgregar = async() => {
        // Todo: Llegar al backend
        try {
            await Api.delete(`/agregar/${ activeAgregar.id }` );
            dispatch( onDeleteAgregar() );
        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }

    }


    const startLoadingAgregar = async() => {
        try {
            
            const { data } = await Api.get('/agregar');
            const agregar = convertEventsToDateEvents( data.agregar );
            dispatch( onLoadAgregar( agregar,agregar.id,agregar.nombre) );
                console.log(data);

        } catch (error) {
          console.log('Error cargando eventos');
          console.log(error)
        }
    }
    


    return {
        //* Propiedades
        activeAgregar,
        agregar,
        hasEventSelected: !!activeAgregar,

        //* Métodos
        setActiveAgregar,
        startDeletingAgregar,
        startLoadingAgregar,
        startSavingAgregar,
    }
}
