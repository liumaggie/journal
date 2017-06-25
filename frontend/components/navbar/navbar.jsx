import React from 'react';

class NavBar extends React.Component {
  render() {
    return(
      <header className='nav-bar'>
        <div className='full-nav'>
          <h1>JO</h1>
          <ul className='links'>
            <li className='journal'></li>
            <li className='neighborhood'></li>
            <li className='amenities'></li>
            <li className='residences'></li>
            <li className='availabilities'></li>
            <li className='team'></li>
            <li className='contact'></li>
          </ul>
        </div>

        <div className='mobile-nav'></div>
      </header>
    );
  }
}

export default NavBar;
