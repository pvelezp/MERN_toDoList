import React from 'react'
import { Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <Link to="/" className="text-light">CRUD - React, Redux, Node API & Axios </Link>
            </div>
            <Link to="/tareas/nuevo"
            className="btn btn-danger nuevo post d-block d-md-inline.block"
            href="/tareas/nuevo">Agregar Tarea &#43;</Link>

        </nav>

      );
}
 
export default Header;