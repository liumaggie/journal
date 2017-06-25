import React from 'react';
import PostItem from './post_item';

class PostsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentWillMount() {
    this.props.fetchAllFacebookPosts()
      .then(() => this.props.fetchAllInstagramPosts())
      .then(() => this.setState({ loading: false }));
  }

  render() {
    if (this.state.loading) {
      return <div></div>;
    } else {
      return(
        <div className='post-index'>
          <ul>
            <li className='title'>
              <div>
                <h2>The Journal</h2>
                <p>Journal Squared invites a new generation to up and coming Jersey City leo
                  mattis euismod ac id ipsum. Phasellus urna eros, auctor eget urna in, lacinia
                  gravida justo. Nunc et enim sed odio placerat pharetra. Curabitur at nunc eu
                  mi condimentum lobortis.</p>
              </div>
            </li>
            {
              this.props.posts.map((post, idx) =>
              <PostItem key={post.id} post={post} idx={idx}/>)
            }

          </ul>
        </div>
      );
    }
  }
}
export default PostsIndex;
