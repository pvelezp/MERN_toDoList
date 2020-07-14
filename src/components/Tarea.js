import React from 'react'
import { useHistory } from 'react-router-dom';
//redux
import { useDispatch } from 'react-redux';
import { eliminarTareaAction, obtenerTareaEditar } from '../actions/tareaActions';

const Tarea = ({tarea}) => {

    const dispatch = useDispatch()
    const history = useHistory()
    //cofnirmar si desea elminar
    const confirmarEliminarTarea = id => {
        //preguntar al usuario

        //pasaria el id
        dispatch(eliminarTareaAction(id))
    }

    const redireccionarEdicion = tarea => {
        dispatch( obtenerTareaEditar(tarea))
        history.push(`/tareas/editar/${id}`)

    }

    const {nombre,id,  handleTareaCompletada} =  tarea
    return ( 
        <tr>
       <td>     <input 
                type="checkbox" 
                onChange={handleTareaCompletada} 
                
            /></td> 
        <td>{nombre}</td> 

        <td className="acciones">
            <button 
            className="btn btn-primary mr-2"
            onClick={() =>redireccionarEdicion(tarea)}
            >
                Editar
            </button>
            <button
            onClick={() => confirmarEliminarTarea(id)}
            type="button"
            className="btn btn-danger"
            >Eliminar
            </button>

        </td>
        </tr>
     );
}
 
export default Tarea;