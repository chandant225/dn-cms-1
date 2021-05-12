import axios from 'axios';
import { FETCH_NOTICE_REQUEST, FETCH_NOTICE_SUCCESS, FETCH_NOTICE_ERROR } from './noticeTypes';

export const fetchNoticeRequest = () => {
    return {
        type: FETCH_NOTICE_REQUEST
    }
}
export const fetchNoticeSuccess = (My_notices) => {
    return {
        type: FETCH_NOTICE_SUCCESS,
        payload: My_notices
    }
}

export const fetchNoticeFailure = (error) => {
    return {
        type: FETCH_NOTICE_ERROR,
        payload: error
    }
}

export const fetchNotices = () => {
    return (dispatch) => {
        dispatch(fetchNoticeRequest)
        axios.get('http://localhost/reactWordpress/wp-json/wp/v2/notices')

            .then(response => {
                const All_Notices = response.data;

                dispatch(fetchNoticeSuccess(All_Notices))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchNoticeFailure(errorMsg))
            })
    }
}