// Header.tsx
import React from 'react';
import Router from 'next/router';
import Search from './Search';
import PersonIcon from '@mui/icons-material/Person';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const userid = cookies.get('userid');


export default function Header({ username }) {
  if (userid != undefined) {
    return (
      <nav className="navbar fixed-top navbar-light bg-light">
        <div className="container-fluid d-flex">
          <a className="navbar-brand" onClick={() => Router.push('/home')} style={{ cursor: 'pointer' }}>
            <img src='/images/logo.svg' alt="Logo" width="35" height="35" />
          </a>

          {/* <div className="navbar-item navbar-light bg-light">
        <Search placeholder={'search'} data={{title: 'Game of thrones'}}/>
      </div> */}

          <div className="nav-item dropdown">
            <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <PersonIcon />
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" onClick={() => Router.push('/profile/' + username)} style={{ cursor: 'pointer' }}>Profile</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" onClick={() => Router.push('/logout')} style={{ cursor: 'pointer' }}>Sign out</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar fixed-top navbar-light bg-light">
        <div className="container-fluid d-flex">
          <a className="navbar-brand" onClick={() => Router.push('/home')} style={{ cursor: 'pointer' }}>
            <img src='/images/logo.svg' alt="Logo" width="35" height="35" />
          </a>

          {/* <div className="navbar-item navbar-light bg-light">
          <Search placeholder={'search'} data={{title: 'Game of thrones'}}/>
        </div> */}

          <div className="nav-item dropdown">
            <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <PersonIcon />
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" onClick={() => Router.push('/login')} style={{ cursor: 'pointer' }}>Log in</a></li>
              <li><a className="dropdown-item" onClick={() => Router.push('/signup')} style={{ cursor: 'pointer' }}>Sign up</a></li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
};