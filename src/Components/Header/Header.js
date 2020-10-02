import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <nav>
      {/*Icon and list  */}
      <div className="nav-link">
        <div className="icon"></div>
        <div>
          <ul>
            <li>
              <Link to="/actors">
                <a>Actors</a>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <a> Projects </a>
              </Link>
            </li>
            <li>
              <Link to="/castings">
                <a> Castings </a>
              </Link>
            </li>
            <li>
              <Link to="/payouts">
                <a> Payouts </a>
              </Link>
            </li>
            <li>
              <Link to="/teams">
                <a> Teams </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/*Avater and search area*/}
      <div className="profile-link">
        <div className="search-input">
          <div className="search-icon"> </div>
          <input placeholder="Search" type="text" />
        </div>

        <div className="notification"> 3 </div>

        <img
          src={
            'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
          alt={'profile Avater'}
        />
      </div>
    </nav>
  );
};

export default Header;
