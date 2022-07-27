import { useDispatch, useSelector } from 'react-redux';
import { Api } from '../api';
import Swal from 'sweetalert2';
import { convertEventsToDateEvents } from '../helpers';
import { onAddNewPrestamo, onSetActivePrestamo, onDeletePrestamo, onLoadPrestamo,onSeleccionPrestamo } from '../store';



export const usePrestamoStore = () =>{

    const dispatch = useDispatch();

    const {prestamo,activePrestamo}= useSelector(state => state.prestamo )
    const { agregar,activeAgregar } = useSelector( state => state.agregar );
    const { user } = useSelector( state => state.auth );

    const setActivePrestamo = ( prestamo ) => {
        dispatch( onSetActivePrestamo( prestamo ) )
    }

    const startSavingPrestamo = async( prestamo ) => {
        
        try {
            if( prestamo.id ) {
                // Actualizando
                await Api.put(`/prestamo/${ prestamo.id }`, prestamo );
                dispatch( onSeleccionPrestamo({ ...prestamo, user }) );
                return;
            } 
    
            // Creando

            const { data } = await Api.post('/prestamo', prestamo );
            dispatch( onAddNewPrestamo({ ...prestamo, id: data.prestamo.id, user: data.user, agregar: data.agregar }) );
            Swal.fire('Solicitud enviada');

        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }

       
        
    }

    const startDeletingPrestamo = async() => {
        // Todo: Llegar al backend
        try {
            await Api.delete(`/prestamo/${ activePrestamo.id }` );
            dispatch( onDeletePrestamo() );
        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }

    }


    const startLoadingPrestamo = async() => {
        try {
            
            const { data } = await Api.get(`/prestamo`);
            const prestamo = convertEventsToDateEvents( data.prestamo );
            dispatch( onLoadPrestamo( prestamo,prestamo.id,prestamo.nombrevid,prestamo.end,prestamo.satart) );
                console.log(data);

        } catch (error) {
          console.log('Error cargando eventos');
          console.log(error)
        }
    }
    


    return {
        //* Propiedades
        activePrestamo,
        prestamo,
        hasEventSelected: !!activePrestamo,

        //* Métodos
        setActivePrestamo,
        startDeletingPrestamo,
        startLoadingPrestamo,
        startSavingPrestamo,
    }
}
