import React from 'react';

class PostItem extends React.Component {
  componentDidMount() {
    // console.log($('img')[0].height)
    $('.fb-post-li-long').height($('img')[0].height);
    $('.fb-post-li-short').height($('img')[0].height);
    $('.title').height($('img')[0].height);
  }

  render() {
    let post = this.props.post;
    let idx = this.props.idx + 1;
    let className;
    if (idx % 3 === 0 && post.message) {
      className = 'fb-post-li-short';
    } else if (post.message) {
      className = 'fb-post-li-long';
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
