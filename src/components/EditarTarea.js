import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import { editarTareaAction } from '../actions/tareaActions';

const EditarTarea = () => {
    //nuevo state de tarea
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })


//tarea a editar
    const tareaeditar =  useSelector(state => state.tareas.tareaeditar)
    
    useEffect( () => {
        guardarTarea(tareaeditar)
    }, [tareaeditar])

    //Leer los datos del formaulario
    const onChangeFormulario = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }


    const {nombre} = tarea

    const submitEditarTarea = e => {
        e.preventDefault()

        editarTareaAction()
    }

    return ( 
        <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Agregar nuevo tarea
                    </h2>

                    <form
                    onSubmit={submitEditarTarea}
                    >
                        <div className="form-group">
                        <label >Nombre del tarea</label>
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Nombre tarea"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeFormulario}
                            />
                        </div>
 
                        <button
                            type="submit"
                            className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                        > Agregar </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default EditarTarea;