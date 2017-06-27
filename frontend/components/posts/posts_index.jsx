import React from 'react';
import PostModal from '../modal/post_modal';
import MobileNavBar from '../navbar/mobile_navbar';

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
    const links = <ul className='links'>
      <li>
        <div className='journal'></div>
        <p>JOURNAL</p>
      </li>

      <li>
        <div className='neighborhood'></div>
        <p>NEIGHBORHOOD</p>
      </li>

      <li>
        <div className='amenities'></div>
        <p>AMENITIES</p>
      </li>

      <li>
        <div className='residences'></div>
        <p>RESIDENCES</p>
      </li>

      <li>
        <div className='availabilities'></div>
        <p>AVAILABILITIES</p>
      </li>

      <li>
        <div className='team'></div>
        <p>TEAM</p>
      </li>

      <li>
        <div className='contact'></div>
        <p>CONTACT</p>
      </li>
    </ul>;
    if (this.state.loading) {
      return <div></div>;
    } else {
      return(
        <div className='post-index'>
          <MobileNavBar />
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
              <PostModal key={post.id} post={post} idx={idx}/>)
            }

          </ul>
        </div>
      );
    }
  }
}
export default PostsIndex;
