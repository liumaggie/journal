import React from 'react';

class PostItem extends React.Component {
  render() {
    let post = this.props.post;

    return(
      <li>
        { post.message ? post.message : post.id }
      </li>
    );
  }
}
// { (post.message).includes('http') ? post.message : null}

export default PostItem;
