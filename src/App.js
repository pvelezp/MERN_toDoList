import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Tareas from './components/Tareas';
import NuevoTarea from './components/NuevoTarea';
import EditarTarea from './components/EditarTarea';
//redux
import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Header />
      <div className="container">
        <Switch>
        <Route exact path="/" component={Tareas}/>
        <Route exact path="/tareas/nuevo" component={NuevoTarea}  />
        <Route exact path="/tareas/editar/:id" component={EditarTarea}  />
        </Switch>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
