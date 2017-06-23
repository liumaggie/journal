import React from 'react';
import PostItem from './post_item';

class PostsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentWillMount() {
    this.props.fetchAllFacebookPosts().then(() => this.setState({ loading: false }));
  }

  render() {
    if (this.state.loading) {
      return <div></div>;
    } else {
      return(
        <div>
          <ul>
            Hello!
            </ul>
          </div>
        );
    }
  }
}

// {
//   this.props.posts.map((post) =>
//   <PostItem key={post.id} post={post}/>)
//   }
export default PostsIndex;
