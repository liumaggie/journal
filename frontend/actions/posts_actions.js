import * as ApiUtil from '../util/api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchAllFacebookPosts = () => dispatch => (
  ApiUtil.fetchAllFacebookPosts()
                    .then((posts) => dispatch(receivePosts(posts.data)))
);

export const fetchAllInstagramPosts = () => dispatch => (
  dispatch(receivePosts(ApiUtil.fetchAllInstagramPosts()))
);
