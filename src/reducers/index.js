import { combineReducers} from 'redux'
import tareasReducer from "./tareasReducer"

export default combineReducers({
    tareas: tareasReducer
})
