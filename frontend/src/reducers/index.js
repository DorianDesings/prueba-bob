import { combineReducers } from 'redux'
import usersReducer from './user.reducer'

export default combineReducers({
    user: usersReducer
})