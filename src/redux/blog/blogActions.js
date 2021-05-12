import axios from 'axios';
import { FETCH_BLOG_REQUEST, FETCH_BLOG_SUCCESS, FETCH_BLOG_ERROR } from './blogTypes';

export const fetchBlogRequest = () => {
    return {
        type: FETCH_BLOG_REQUEST
    }
}
export const fetchBlogSuccess = (My_blogs) => {
    return {
        type: FETCH_BLOG_SUCCESS,
        payload: My_blogs
    }
}

export const fetchBlogFailure = (error) => {
    return {
        type: FETCH_BLOG_ERROR,
        payload: error
    }
}

export const fetchBlogs = () => {
    return (dispatch) => {
        dispatch(fetchBlogRequest)
        axios.get('http://localhost/reactWordpress/wp-json/wp/v2/posts')

            .then(response => {
                const All_Blogs = response.data;
                dispatch(fetchBlogSuccess(All_Blogs))
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchBlogFailure(errorMsg))
            })
    }
}