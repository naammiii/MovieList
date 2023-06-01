// Header.tsx
import React from 'react';
import Router from 'next/router';
import Search from './Search';
import PersonIcon from '@mui/icons-material/Person';

const Header: React.FC = () => {
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
    <div className="container-fluid d-flex">
      <a className="navbar-brand" href="#">
        <img src='/images/logo.svg' alt="Logo" width="35" height="35"/>
      </a>

      <div className="navbar-item navbar-light bg-light">
        <Search placeholder={'search'} data={{title: 'Game of thrones'}}/>
      </div>

      <div className="nav-item dropdown">
        <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          <PersonIcon />
        </a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li>
            <hr className="dropdown-divider"/>
          </li>
          <li><a className="dropdown-item" href="#"onClick={() => Router.push('/signout')}>Sign out</a></li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Header;