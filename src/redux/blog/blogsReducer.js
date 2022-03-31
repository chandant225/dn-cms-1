import { FETCH_BLOG_REQUEST, FETCH_BLOG_SUCCESS, FETCH_BLOG_ERROR } from './blogTypes';

const initialstate = {
    loading: false,
    Blogs: [],
    error: ''
}

const blogsreducer = (state = initialstate, action) => {
    switch (action.type) {
        case FETCH_BLOG_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_BLOG_SUCCESS:
            return {
                loading: false,
                Blogs: action.payload
            }
        case FETCH_BLOG_ERROR:
            return {
                loading: false,
                Blogs: [],
                error: action.payload

            }

        default: return state
    }
}

export default blogsreducer