import React from 'react';

class NavBar extends React.Component {
  render() {
    return(
      <header>
        <div>JO</div>
        <nav>
          <div className='journal'></div>
          <div className='neighborhood'></div>
          <div className='amenities'></div>
          <div className='residences'></div>
          <div className='availabilities'></div>
          <div className='team'></div>
          <div className='contact'></div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
