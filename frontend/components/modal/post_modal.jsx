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
              { post.message ?
                <div className='fb-modal'>
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
