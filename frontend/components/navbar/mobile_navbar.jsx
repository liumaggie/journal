import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
      backgroundColor: 'rgba(85, 105, 123, 0.4)'
    }
};

class MobileNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    $('.fa-bars').css('visibility', 'hidden');
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    $('.fa-bars').css('visibility', 'visible');
    this.setState({modalIsOpen: false});
  }

  render() {
    const linkTitleClass = this.state.modalIsOpen ? '' : 'hidden';
    const links = <ul className='links'>
      <li>
        <div className='journal'></div>
        <p className={linkTitleClass}>JOURNAL</p>
      </li>

      <li>
        <div className='neighborhood'></div>
        <p className={linkTitleClass}>NEIGHBORHOOD</p>
      </li>

      <li>
        <div className='amenities'></div>
        <p className={linkTitleClass}>AMENITIES</p>
      </li>

      <li>
        <div className='residences'></div>
        <p className={linkTitleClass}>RESIDENCES</p>
      </li>

      <li>
        <div className='availabilities'></div>
        <p className={linkTitleClass}>AVAILABILITIES</p>
      </li>

      <li>
        <div className='team'></div>
        <p className={linkTitleClass}>TEAM</p>
      </li>

      <li>
        <div className='contact'></div>
        <p className={linkTitleClass}>CONTACT</p>
      </li>
    </ul>;

      return(
        <header onClick={this.openModal} className='mobile-nav-bar'>
            <i onClick={this.openModal} className="fa fa-bars"></i>


          <Modal
            className="mobile-navbar-modal"
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="NavBar Modal"
            >

            <header onClick={this.closeModal} className='nav-bar-modal'>
              <div className='full-nav'>
                <div className='nav-title'><h1>JOURNAL</h1><h1>SQUARED</h1></div>
                {links}
              </div>


            </header>
          </Modal>

        </header>
      );


  }
}

export default MobileNavBar;
