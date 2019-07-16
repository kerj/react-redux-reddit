import newPostReducer from './newPostReducer';
import votePostReducer from './votePostReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    masterPostList: newPostReducer,
    votePost: votePostReducer
});

export default rootReducer;