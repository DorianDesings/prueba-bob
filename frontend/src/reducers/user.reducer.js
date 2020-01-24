import {
    ADD_USER,
    DELETE_USER
} from '../types'

const initialState = {
    users: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}