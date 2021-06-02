import { createStore } from "vuex"
import modules from './modules'

const store = createStore({
    state: {
        counter: 0
    },
    mutations: {
        add(state){
            state.counter++
        }
    },
    modules
})

export default store