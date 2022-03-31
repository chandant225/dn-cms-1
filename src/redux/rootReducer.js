import { combineReducers } from 'redux';
import blogsReducer from './blog/blogsReducer';
import noticeReducer from './notice/noticeReducer';
import eventreducer from './event/eventReducer';
import memberReducer from './teamMembers/memberReducer';

const rootReducer = combineReducers({
    blogs: blogsReducer,
    notices: noticeReducer,
    events: eventreducer,
    members: memberReducer
})

export default rootReducer