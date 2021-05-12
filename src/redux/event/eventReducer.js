import { FETCH_EVENT_REQUEST, FETCH_EVENT_SUCCESS, FETCH_EVENT_ERROR } from './eventTypes';

const initialEventState = {
    loading: false,
    Events: [],
    error: ''
}

const eventreducer = (state = initialEventState, action) => {
    switch (action.type) {
        case FETCH_EVENT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_EVENT_SUCCESS:
            return {
                loading: false,
                Events: action.payload
            }
        case FETCH_EVENT_ERROR:
            return {
                loading: false,
                Events: [],
                error: action.payload

            }

        default: return state
    }
}

export default eventreducer