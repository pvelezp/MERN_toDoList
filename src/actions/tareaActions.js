import { AGREGAR_TAREA,
     AGREGAR_TAREA_ERROR,
      AGREGAR_TAREA_EXITO,
    COMENZAR_DESCARGAR_TAREAS,
    DESCARGA_TAREAS_EXITO,
    DESCARGA_TAREAS_ERROR,
    ELIMINAR_TAREA,
    ELIMINAR_TAREA_ERROR,
    ELIMINAR_TAREA_EXITO,
    OBTENER_TAREA_EDITAR,
    COMENZAR_EDICION_TAREA
    } from '../types/index';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2'
// crear nuevos tareas

export function crearNuevoTareaAction(tarea){
    return async (dispatch) => {
        dispatch( agregarTarea())
        try {
            await clienteAxios.post('/tareas', tarea)

            //si too sale bien, actualizar el estado
            dispatch(agregarTareaExito(tarea))

            //Alerta
                Swal.fire(
                    'Correcto',
                    'El tarea se agregó correctamente',
                    'sucess'
                )
        } catch(error){
            //si hay un error cambiar el state
            dispatch( agregarTareaError(true))
            //alerta de error
            Swal.fire({
              icon:'error',
              title: 'Hubo un error',
              text: 'Intenta de nuevo'  
            })
        }
    }
}

const agregarTarea = () => ({
   type: AGREGAR_TAREA
})

// si el rpoducto se guarda en la base de datos
const agregarTareaExito = tarea => ({
    type: AGREGAR_TAREA_EXITO,
    payload: tarea
})
// si hubo un error
const agregarTareaError = estado => ({
    type: AGREGAR_TAREA_ERROR,
    payload: estado
})

// Función que descarga los tareas de la base de datos

export const descargaTareas = () => async dispatch => {
    dispatch({type: COMENZAR_DESCARGAR_TAREAS,loading: true})
    try {
        const {data} = await clienteAxios.get('/tareas')

        dispatch({type: DESCARGA_TAREAS_EXITO, payload:data})

    }
    catch(error) {
        dispatch({type: DESCARGA_TAREAS_ERROR,error:true})
    }
}


//selecciona y eliminar el tarea

export const eliminarTareaAction = (id) => async dispatch => {
    dispatch(eliminarTarea(id))
    try {
        await clienteAxios.delete(`/tareas/${id}`)
        dispatch(eliminarTareaExito())
    } catch {
        dispatch(eliminarTareaError())
    }
    
}
 const eliminarTarea = id =>( {
            type: ELIMINAR_TAREA,
            payload: id
 })

 const eliminarTareaExito = () => ({
     type: ELIMINAR_TAREA_EXITO
 })

 const eliminarTareaError = () => ({
    type: ELIMINAR_TAREA_ERROR
})

// editar productio

export const obtenerTareaEditar = tarea => dispatch => {
    dispatch(obtenerTareaEditarAction(tarea))
}

const obtenerTareaEditarAction = tarea => ({
    type: OBTENER_TAREA_EDITAR,
    payload: tarea
})


export function editarTareaAction(tarea){
    return async (dispatch) => {
        dispatch( editarTarea(tarea))
        try {
         const resultado = await clienteAxios.put(`/tareas/${tarea.id}`, tarea)
         console.log(resultado)
        }catch(error) {
            
        }

    }
}

const editarTarea = tarea => ({
    type: COMENZAR_EDICION_TAREA,
    payload:tarea
})