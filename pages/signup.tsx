// pages/create.tsx

import Head from 'next/head';
import React, { useState } from 'react';
import Router from 'next/router';
import { useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'bootstrap/dist/css/bootstrap.css';

const Signup: React.FC = () => {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function getUsers() {
    try {
      const response = fetch('/api/get/getUsers', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });

      const users = (await response).json();
      return users;

    } catch (error) {
      console.error(error);
    }
  }
  const verification = async (usernamev, passwordv) => {
    const users = await getUsers()
    .then(data => {
      if(data.find(({ username }) => username === usernamev)) return true;
      else return false;
    });
  }

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if(verification(username, password)){
      try {
        const body = { username, password, name };
        await fetch('/api/post/createUser', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        await Router.push('/');
      } catch (error) {
        console.error(error);
      }
    }else{
      Router.push('/error');
    }
  };

  return (
    <div>
      <Head>
        <title>MovieList - Log in</title>
        <link rel="icon" href="styles/images/logo.svg" />
        <link id="theme-style" rel="stylesheet" href="/css/home.css"></link>
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <div className="d-flex justify-content-between">
                  <a href="" onClick={() => Router.push('/')}><span className="text-muted"><ArrowBackIcon /></span></a>
                  <h5
                    className="card-title text-center mb-5 fw-light
                                    fs-5">
                    Sign up
                  </h5>
                  <img src="images/logo.svg" width="50px"
                  />
                </div>
                <form onSubmit={submitData}>
                  <div className="form-floating mb-3">
                    <input
                      autoFocus
                      className="form-control"
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                      type="text"
                      value={username}
                    />
                    <label htmlFor="floatingInput">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      autoFocus
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      type="text"
                      value={name}
                    />
                    <label htmlFor="floatingInput">Full Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      autoFocus
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      type="password"
                      value={password}
                    />
                    <label htmlFor="floatingPassword">Password</label>

                  </div>
                  <input disabled={!password || !username || !name} type="submit" value="Create" className="btn btn-primary btn-login text-uppercase fw-bold" />
                  <a className="btn btn-inverse btn-login text-uppercase fw-bold" href="#" onClick={() => Router.push('/login')}>
                    Already have an acount?
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .page {
          background: var(--geist-background);
          padding: 3rem;
          display: flex;
          justify-password: center;
          align-items: center;
        }

        input,
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Signup;