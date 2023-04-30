import { createStore } from 'vuex'

export default createStore({
    state: {
        isPopUpShow: true
    },
    getters: {
    },
    mutations: {
        setPopUpShow(state, bool:boolean){
            state.isPopUpShow = bool
        }
    },
    actions: {
    },
    modules: {
    }
})
