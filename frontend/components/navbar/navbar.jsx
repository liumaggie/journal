import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
      backgroundColor: 'rgba(85, 105, 123, 0.8)'
    }
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
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

    if (this.state.modalIsOpen) {
      return(
        <header onClick={this.closeModal} className='nav-bar-modal'>
          <div className='full-nav'>
            <div className='nav-title'><h1>JOURNAL</h1><h1>SQUARED</h1></div>
            {links}
          </div>

          <Modal
            className="navbar-modal"
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="NavBar Modal"
            >

            <h2>The Journal</h2>
            <p>Journal Squared invites a new generation to up and coming Jersey City leo mattis euismod ac id ipsum. Phasellus urna eros, auctor eget urna in, lacinia gravida justo. Nunc et enim sed odio placerat pharetra. Curabitur at nunc eu mi condimentum lobortis.</p>

          </Modal>
        </header>
      )
    } else {
      return(
        <header onClick={this.openModal} className='nav-bar'>
          <div className='full-nav'>
            <div><h1>J</h1><h3 className='square'></h3></div>
            {links}
          </div>

          <div className='mobile-nav'></div>

          <Modal
            className="navbar-modal"
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="NavBar Modal"
            >

            <h2>The Journal</h2>
            <p>Journal Squared invites a new generation to up and coming Jersey City leo mattis euismod ac id ipsum. Phasellus urna eros, auctor eget urna in, lacinia gravida justo. Nunc et enim sed odio placerat pharetra. Curabitur at nunc eu mi condimentum lobortis.</p>

          </Modal>
        </header>
      );

    }
  }
}

export default NavBar;
