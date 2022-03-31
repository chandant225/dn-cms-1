import { FETCH_MEMBER_REQUEST, FETCH_MEMBER_SUCCESS, FETCH_MEMBER_ERROR } from './memberTypes';
import axios from 'axios';

export const fetchMemberRequest = () => {
    return {
        type: FETCH_MEMBER_REQUEST
    }
}

export const fetchMemberSuccess = (my_Member) => {
    return {
        type: FETCH_MEMBER_SUCCESS,
        payload: my_Member
    }
}

export const fetchMemberError = (error) => {
    return {
        type: FETCH_MEMBER_ERROR,
        payload: error

    }
}

export const fetchMembers = () => {
    return (dispatch) => {
        dispatch(fetchMemberRequest())
        axios.get('http://localhost/reactWordpress/wp-json/wp/v2/teammembers/')
            .then(res => {
                const my_Member = res.data;
                dispatch(fetchMemberSuccess(my_Member))
            })
            .catch(error => {
                const err_Msg = error.message;
                dispatch(fetchMemberError(err_Msg))
            })
    }
}