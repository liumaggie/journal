import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchAllFacebookPosts, fetchAllInstagramPosts } from './util/api_util';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.fetchAllInstagramPosts = fetchAllInstagramPosts;

  const store = configureStore();

  Modal.setAppElement('#root');
  ReactDOM.render(<Root store={store} />, root);

});
