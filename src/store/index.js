import { createStore } from "vuex"

const store = createStore({
    state: {
        counter: 0
    },
    mutations: {
        add(state){
            state.counter++
        }
    }
})

export default store