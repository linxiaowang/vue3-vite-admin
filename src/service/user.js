
import request from 'utils/request'
import { removeAuthorization } from 'utils/athorization'

export function login(params) {
    return request.post('/login', params)
}

export function getUsers() {
    return request.get('/getUsers')
}

export function logout(){
    localStorage.clear()
    removeAuthorization()
}