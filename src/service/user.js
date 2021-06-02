
import request from 'utils/request'

export function login(params) {
    return request.post('/login', params)
}

export function getUsers() {
    return request.get('/getUsers')
}

export function logout(){
    localStorage.clear()
}