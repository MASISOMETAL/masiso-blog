import { GET_PADDING, GET_TOP } from "../actions/HeaderAction";

const initialState = {
    headerTop: 0,
    headerPadding: 0,
}

const HeaderReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_TOP:
            return {
                ...state,
                headerTop: action.top
            };
        case GET_PADDING:
            return {
                ...state,
                headerPadding: action.padding
            };
        default:
            return state;
    }
}

export default HeaderReducer;