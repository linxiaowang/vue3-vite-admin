export function handleGetters(state, module, name){
    if(!state[name]){
        try {
            const nameValue = localStorage.getItem(`${module}.${name}`)
            state[name] = nameValue
        } catch (e) {
            console.error(e)
        }
    }
    return state[name]
}