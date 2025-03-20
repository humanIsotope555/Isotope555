let initialState = {
        loading: false,
        item: []
};

function reducer(state = initialState, action){

    var {item, } = state;

    switch (action.type) {
        case 'FETCH_DATA_REQUEST':
            return {...state,
                    loading: true,
                    item: action.item,
                    };
        case 'FETCH_DATA_SUCCESS':
            return{
                ...state,
                loading: false,
                item: action.item
            };
        default:
            return state
    }

}

export default reducer;