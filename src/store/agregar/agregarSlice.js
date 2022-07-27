import {createSlice} from '@reduxjs/toolkit';


export const AgregarSlice = createSlice({
    name:'agregar',
    initialState:{
    isLoadingAgregar: true,
    agregar:[

    ],
    activeAgregar:null    
    },
    reducers: {
        onSetActiveAgregar: ( state, { payload }) => {
            state.activeAgregar = payload;
        },
        onAddNewAgregar: ( state, { payload }) => {
            state.agregar.push( payload );
            state.activeAgregar = null;
        },
        onUpdateAgregar: ( state, { payload } ) => {
            state.agregar = state.agregar.map( agregar => {
                if ( agregar.id === payload.id ) {
                    return payload;
                }

                return agregar;
            });
        },
        onDeleteAgregar: ( state ) => {
            if ( state.activeAgregar ) {
                state.agregar = state.agregar.filter( agregar => agregar.id !== state.activeAgregar.id );
                state.activeAgregar = null;
            }
        },
        onLoadAgregar: (state, { payload = [] }) => {
            state.isLoadingAgregar = false;
            // state.agregar = payload;
            payload.forEach( agregar => {
                const exists = state.agregar.some( dbAgregar => dbAgregar.id === agregar.id );
                if ( !exists ) {
                    state.agregar.push( agregar )
                }
            }) 
        },
        onLogoutAgregar: ( state ) => {
            state.isLoadingAgregar = true,
            state.agregar      = []
            state.activeAgregar = null
        }
    }
});
 
export const {
    onAddNewAgregar,
    onDeleteAgregar,
    onLoadAgregar,
    onLogoutAgregar,
    onSetActiveAgregar,
    onUpdateAgregar,
} = AgregarSlice.actions;