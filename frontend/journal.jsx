import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllFacebookPosts } from './util/fb_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.fetchAllFacebookPosts = fetchAllFacebookPosts;
  ReactDOM.render(<h1>yahoo!</h1>, root);
});
