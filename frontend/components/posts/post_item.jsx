import React from 'react';

class PostItem extends React.Component {
  render() {
    let post = this.props.post;
    let idx = this.props.idx+1;
    let className;
    if ((idx === 0 || idx === 1) && post.message) {
      className = 'fb-post-li-short';
    } else if (idx === 0 || idx === 1) {
      className = 'ig-photo-li';
    } else if (idx % 3 === 1 && post.message) {
      className = 'fb-post-li-short';
    } else if (idx % 3 === 2 && post.message) {
      className = 'fb-post-li-long';
    } else if (post.message) {
      className = 'fb-post-li-short';
    } else {
      className = 'ig-photo-li';
    }

    return(
      <li className={ className }>
        { post.message ?
          <div className='fb-post'>{ post.message }</div> :
          <img className='ig-photo' src={`${post.images.standard_resolution.url}`} /> }
      </li>
    );
  }
}

export default PostItem;
