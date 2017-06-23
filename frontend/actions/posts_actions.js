import * as FacebookApiUtil from '../util/fb_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchAllFacebookPosts = () => dispatch => (
  FacebookApiUtil.fetchAllFacebookPosts()
                    .then((posts) => dispatch(receivePosts(posts.data)))
);
