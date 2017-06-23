import React from 'react';

class PostItem extends React.Component {
  render() {
    let post = this.props.post;

    return(
      <li>
        { (post.message).includes('http') ? post.message : null}
      </li>
    );
  }
}

export default PostItem;
