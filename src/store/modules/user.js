export default {
    namespace: true,
    state: {
        id: '',
        name: '',
        avatar: ''
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
            state.avatar = avatar;
            localStorage.setItem('user.avatar', avatar)
        }
    }
}