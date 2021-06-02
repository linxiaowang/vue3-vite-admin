import { handleGetters } from 'utils/utils'
export default {
    namespaced: true,
    state: {
        id: '',
        name: '',
        avatar: '',
        token: ''
    },

    getters: {
        id: state => handleGetters(state, 'user', 'id'),
        name: state => handleGetters(state, 'user', 'name'),
        avatar: state => handleGetters(state, 'user', 'avatar'),
        token: state => handleGetters(state, 'user', 'token'),
    },

    mutations: {
        setId(state, id) {
            state.id = id;
            localStorage.setItem('user.id', id)
        },
        setName(state, name) {
            state.name = name;
            localStorage.setItem('user.name', name)
        },
        setAvatar(state, avatar) {
            console.log(state,avatar)
            state.avatar = avatar;
            localStorage.setItem('user.avatar', avatar)
        },
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('user.token', token)
        },
        logout(){
            
        }
    }
}