import { configureStore } from '@reduxjs/toolkit';
import { AgregarSlice } from './agregar/agregarSlice';
import { authSlice } from './auth/authSlice';
import {prestamoSlice} from './prestamo/prestamoSlice'
import { uiSlice } from './ui/uiSlice';


export const store = configureStore({
    reducer: {
        auth:   authSlice.reducer,
        agregar: AgregarSlice.reducer,
        prestamo: prestamoSlice.reducer,
        ui: uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
