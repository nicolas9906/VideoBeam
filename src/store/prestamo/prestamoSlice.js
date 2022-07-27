import { createSlice } from '@reduxjs/toolkit';



export const prestamoSlice = createSlice( {


    name:'prestar',
    initialState:{
    isLoadingPrestamo: true,
    prestamo:[

    ],
    activePrestamo:null    
    },
    reducers: {
        onSetActivePrestamo: ( state, { payload }) => {
            state.activePrestamo= payload;
        },
        onAddNewPrestamo: ( state, { payload }) => {
            state.prestamo.push( payload );
            state.activePrestamo = null;
        },
        onSeleccionPrestamo: ( state, { payload } ) => {
            state.prestamo = state.prestamo.map( prestamo => {
                if ( prestamo.id === payload.id ) {
                    return payload;
                }

                return prestamo;
            });
        },
        onDeletePrestamo: ( state ) => {
            if ( state.activeAgregar ) {
                state.prestamo = stateprestamo.filter( prestamo => prestamo.id !== state.activePrestamo.id );
                state.activeAgregar = null;
            }
        },
        onLoadPrestamo: (state, { payload = [] }) => {
            state.isLoadingPrestamo = false;
            // state.prestamo = payload;
            payload.forEach( prestamo => {
                const exists = state.prestamo.some( dbPrestamo => dbPrestamo.id === prestamo.id );
                if ( !exists ) {
                    state.prestamo.push( prestamo )
                }
            }) 
        },
        onLogoutPrestamo: ( state ) => {
            state.isLoadingPrestamo = true,
            state.prestamo      = []
            state.activePrestamo = null
        }
    }
});


export const {
    onLoadPrestamo,
    onSetActivePrestamo,
    onLogoutPrestamo,
    onDeletePrestamo,
    onSeleccionPrestamo,
    onAddNewPrestamo,
} = prestamoSlice.actions;
