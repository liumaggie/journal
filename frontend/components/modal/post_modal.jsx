import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
      backgroundColor: 'rgba(0,0,0,0.5)'
    }
};

class PostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.findClass = this.findClass.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  findClass() {
    let post = this.props.post;
    let idx = this.props.idx+1;

    let className;
    if ((idx === 1 || idx === 2) && post.message) {
      className = 'fb-post-li-short';
    } else if (idx === 1 || idx === 2) {
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
    return className;
  }

  render() {
    let post = this.props.post;
    let idx = this.props.idx+1;
    return(

        <li onClick={this.openModal} className={ this.findClass() }>

          { post.message ?
            <div className='fb-post'>{ post.message }</div> :
            <img className='ig-photo' src={`${post.images.standard_resolution.url}`} /> }

          { post.message ?
            <i className="fa fa-facebook-square"></i> :
            <i className="fa fa-instagram"></i>
          }

        <Modal
          className="post-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Post Modal"
          >

          <div className='modal'>
            <i onClick={this.closeModal} className="fa fa-times-circle-o"></i>
            <div className='post'>

              <div className='header'>
                <div className='left'>
                  { post.message ?
                    <a href={`https://www.facebook.com/journalsquaredjc/posts/${post.id.split("_")[1]}`} className='post-modal-header'>
                      <i className="fa fa-facebook-square"></i>
                      <p>journalsquaredjc</p>
                    </a> :

                    <a href={`https://www.instagram.com/p/${post.code}`} className='post-modal-header'>
                      <i className="fa fa-instagram"></i>
                      <p>journalsquared</p>
                    </a>
                  }
                </div>

                <div className='share'>
                  <div className="fb-share-button"
                    data-href="https://qb-journal.herokuapp.com/#/"
                    data-mobile-iframe="true"><a className="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fqb-journal.herokuapp.com%2F%23%2F&amp;src=sdkpreparse">
                    <i className="fa fa-facebook-official" aria-hidden="true"></i></a></div>

                    <a href="https://twitter.com/share?
                      url=https%3A%2F%2Fqb-journal.herokuapp.com&">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>

                    <a href="mailto:?body=https://qb-journal.herokuapp.com/#/">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                </div>

              </div>



              { post.message ?
                <div className='fb-modal'>
                  <img src={ window.images.fbPhoto } />
                  <p>{post.message}</p>
                </div> :
                <div className='ig-modal'>
                  <img src={`${post.images.standard_resolution.url}`} />
                  <p>{ post.caption.text }</p>
                </div>
              }
            </div>
          </div>

        </Modal>
      </li>

    );
  }
}

export default PostModal;
