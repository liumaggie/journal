import React from 'react';
import PostsIndexContainer from './posts/posts_index_container';
import NavBar from './navbar/navbar';

const App = () => {
  return(
    <div className='app'>
      <NavBar />
      <PostsIndexContainer />
    </div>
  );
};

export default App;
