import { RECEIVE_POSTS } from '../actions/posts_actions';
import { merge } from 'lodash';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      // const newState = merge({}, state);
      return action.posts;
    default:
      return state;
  }
};

export default PostsReducer;
