import { FETCH_EVENT_REQUEST, FETCH_EVENT_SUCCESS, FETCH_EVENT_ERROR } from './eventTypes';
import axios from 'axios';


export const fetchEventRequest = () => {
    return {
        type: FETCH_EVENT_REQUEST
    }
}

export const fetchEventSuccess = (My_Events) => {
    return {
        type: FETCH_EVENT_SUCCESS,
        payload: My_Events
    }
}

export const fetchEventError = (error) => {
    return {
        type: FETCH_EVENT_ERROR,
        payload: error
    }
}

export const fetchEvents = () => {
    return (dispatch) => {
        dispatch(fetchEventRequest)
        axios.get('http://localhost/reactWordpress/wp-json/wp/v2/events/')
            .then(response => {
                const My_events = response.data
                dispatch(fetchEventSuccess(My_events))
            }).catch(error => {
                const errorMsg = error.message
                dispatch(fetchEventError(errorMsg))

            })
    }
}