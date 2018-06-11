import zgs from './zgs/reducer'
import Home from './home/reducer'
import {combineReducers} from 'redux'

const reducer = combineReducers({Home,zgs})

export default reducer