import { RECEIVE_POSTS } from '../actions/posts_actions';
import { merge } from 'lodash';

const PostsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      let newState;
      if (state.length === 0) {
        newState = [];
        action.posts.forEach((post) => {
          if (post.message.includes('http')) {
            newState.push(post);
          }
        });
      } else {
        // converts instagram created time 
        action.posts.forEach((post) => {
          post.created_time = parseInt(post.created_time) * 1000;
        });
        newState = state.concat(action.posts);
        newState.sort(function(x, y) {
          return new Date(y.created_time) - new Date(x.created_time);
        });
      }
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;
