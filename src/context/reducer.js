function reducer(state, action){
    switch(action.type){
        case "ARTIR":
            state.counter = state.counter + 1;
            return { ...state}
        case 'AZALT':
            state.counter = state.counter - 1;
            return { ...state }
        case "SIFIRLA":
            state.counter = action.value;
            return { ...state }
        default:
            return state;
    }
}

export {reducer}