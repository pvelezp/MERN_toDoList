import { AGREGAR_TAREA,
    AGREGAR_TAREA_ERROR,
     AGREGAR_TAREA_EXITO,
   COMENZAR_DESCARGAR_TAREAS,
   DESCARGA_TAREAS_EXITO,
   DESCARGA_TAREAS_ERROR,
   ELIMINAR_TAREA,
   ELIMINAR_TAREA_EXITO,
   ELIMINAR_TAREA_ERROR,
   OBTENER_TAREA_EDITAR,
   TAREA_EDITADO_EXITO

   } from '../types/index';
//cada reducer tiene su propio state

const initialState = {
    productos: [],
    error: null,
    loading: false,
    productoeliminar: [],
    productoeditar: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case AGREGAR_TAREA:
            return {
                ...state,
                loading: true
            }
        case AGREGAR_TAREA_EXITO:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }
        case AGREGAR_TAREA_ERROR:
             return {
                 ...state,
                 loading: false,
                 error: action.payload
             }
        case COMENZAR_DESCARGAR_TAREAS:
            return {
                ...state,
                loading: action.payload
            }
        case DESCARGA_TAREAS_EXITO:
            return {
                ...state,
               
                loading: false,
                error:null,
                productos: action.payload
            }
        case DESCARGA_TAREAS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case ELIMINAR_TAREA:
            return {
                ...state,
                productoeliminar: action.payload
            }
        case ELIMINAR_TAREA_EXITO:
            return {
                ...state,
                productos: state.productos.filter(producto => producto.id !== state.productoeliminar) ,
                productoeliminar: null
                   }
        case ELIMINAR_TAREA_ERROR:
            return {
                ...state,
                error: true
            }
        case OBTENER_TAREA_EDITAR:
            return {
                ...state,
                productoeditar: action.payload
            }
        case TAREA_EDITADO_EXITO:
            return {
                ...state,
                
            }
        default:
             return state
    }
}