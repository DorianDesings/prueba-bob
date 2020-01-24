import {
    ADD_USER,
    DELETE_USER
} from '../types'

export function addUserAction() {
    return () => {
        console.log('action')
    }
}