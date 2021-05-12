import { FETCH_NOTICE_REQUEST, FETCH_NOTICE_SUCCESS, FETCH_NOTICE_ERROR } from './noticeTypes';

const initialstate = {
    loading: false,
    Notices: [],
    error: ''
}

const noticeReducer = (state = initialstate, action) => {
    switch (action.type) {
        case FETCH_NOTICE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_NOTICE_SUCCESS:
            return {
                loading: false,
                Notices: action.payload
            }
        case FETCH_NOTICE_ERROR:
            return {
                loading: false,
                Notices: [],
                error: action.payload

            }

        default: return state
    }
}

export default noticeReducer