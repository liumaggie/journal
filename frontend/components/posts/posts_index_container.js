import React from 'react';
import { connect } from 'react-redux';
import PostsIndex from './posts_index';
import { fetchAllFacebookPosts, fetchAllInstagramPosts } from '../../actions/posts_actions';

const mapStateToProps = (state) => {
  return({
    posts: state.posts
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchAllFacebookPosts: () => dispatch(fetchAllFacebookPosts()),
    fetchAllInstagramPosts: () => dispatch(fetchAllInstagramPosts())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
