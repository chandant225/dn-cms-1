import { FETCH_MEMBER_REQUEST, FETCH_MEMBER_SUCCESS, FETCH_MEMBER_ERROR } from './memberTypes';

const initialMemberState = {
    loading: false,
    Members: [],
    error: ''
}

const memberReducer = (state = initialMemberState, action) => {
    switch (action.type) {
        case FETCH_MEMBER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_MEMBER_SUCCESS:
            return {
                loading: false,
                Members: action.payload
            }
        case FETCH_MEMBER_ERROR:
            return {
                loading: false,
                Events: [],
                error: action.payload
            }
        default: return state
    }
}


export default memberReducer