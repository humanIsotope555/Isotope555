export const initialState = {
        user: 'Alex',
};

export function rootReducer(state = initialState, action){
    switch (action.type) {
        case 'GET':
            return { ...state, user: action.payload};
        default:
            return state
    }

}