import {createStore} from 'redux'
import rootReducers from './reducer/combineReducer'

const store = createStore(rootReducers)

export default store