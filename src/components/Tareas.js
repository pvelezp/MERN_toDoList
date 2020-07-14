import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
//action de redux
import {descargaTareas} from '../actions/tareaActions'
import Tarea from './Tarea';

const Tareas = () => {
    //utiliza useDispatch y te crea una funcion
    const dispatch = useDispatch()
    //acceder al state del store

    
    useEffect( () => {
        dispatch(descargaTareas())
    },[])

    
    const[tareacompletada, setTareaCompletada] = useState([])

    const cargando = useSelector(state => state.tareas.loading)
    const error = useSelector(state => state.tareas.error)
    const tareas = useSelector(state => state.tareas.tareas)

    const handleTareaCompletada = id => {
        const actualTarea =  [...tareas]
        const tarea =  actualTarea.find(tarea => tarea.id === id)
        const index = actualTarea.indexOf(tarea)

        actualTarea[index].donde = !actualTarea[index].donde
        setTareaCompletada(actualTarea)
    }

    return (  
        <>
    <h2 className="text-center my-5">Listado de tareas</h2>
    <table className="table table-striped">
        <thead className="bg-primary table-dark">
            <tr>
                <th scope="col">Realizado</th>
                <th scope="col">Nombre</th>
                <th scope="col">Acciones</th>
            </tr>
            
        </thead>
        <tbody>

            {error? <p
            className="alert alert-danger p2 mt-6 text-center"
            >No se puede carga tabla</p> :
            cargando ? <p>Cargando...</p> :(
                tareas.map(tarea => (
                    <Tarea 
                    key={tarea.id}
                    tarea={tarea}
                    handleChange={() => handleTareaCompletada(tarea.id)}
                    />
                ))
            )
}
        </tbody>
    </table>

        </>
    );
}
 
export default Tareas;