import React from 'react';

class PostItem extends React.Component {
  render() {
    let post = this.props.post;

    return(
      <li>
        { post.message ?
          <div className='fb-post'>{ post.message }</div> :
          <img className='ig-photo' src={`${post.images.standard_resolution.url}`} /> }
      </li>
    );
  }
}

export default PostItem;
