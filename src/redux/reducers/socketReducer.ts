import socketActions from '../actions/socketActions';

const INITIAL_STATE = {
    mainSocket: undefined,
};

const socketReducer = (state = INITIAL_STATE, action: { type: string, payload: any }) => {
    switch (action.type) {
        case socketActions.SET_MAIN_SOCKET:
            return {
                ...state,
                mainSocket: action.payload,
            }
        default:
            return state;
    }
};

export default socketReducer;
