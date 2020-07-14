import React, {useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
//Action de redux
import { crearNuevoTareaAction } from '../actions/tareaActions';

const NuevoTarea = ({history}) => {

    // state del componente
    const [ nombre, guardarNombre] =  useState('')
 

    //utilizar useDispatch y te crea una funcion
    const dispatch = useDispatch()

    // acceder al state del store
    const cargando = useSelector( state => state.tareas.loading)
    const error =  useSelector( state => state.tareas.error)

        //mandar llamar el action de tareaAction
    const agregarTarea = (tarea) =>  dispatch(crearNuevoTareaAction(tarea))

    const submitNuevoTarea = e => {
        e.preventDefault()
        //validar formulario
        if(nombre.trim() === ''){
            return
        }
        //si no hay errores

        //crear el nuevo tarea
        agregarTarea({
            nombre
        })
        //redireccionar a la página principal
        history.push('/')
    }




    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar nuevo tarea
                        </h2>

                        <form onSubmit={submitNuevoTarea}>
                            <div className="form-group">
                            <label >Nombre tarea</label>
                                <input 
                                type="text"
                                className="form-control"
                                placeholder="Nombre tarea"
                                name="nombre"
                                value={nombre}
                                onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            > Agregar </button>
                        </form>
                        { cargando ? <p>Cargando...</p> : null}
                        { error? <p className="alert alert-danger p2 mt-6 text-center">Hubo un error</p> : null}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoTarea;