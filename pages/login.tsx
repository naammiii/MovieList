// pages/create.tsx

import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Router from 'next/router';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import * as bcrypt from "bcrypt"
import 'bootstrap/dist/css/bootstrap.css';

const cookies = new Cookies();
const userid = cookies.get('userid');

export default function Login ()
{
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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

    async function comparePassword(userpass, dbpass){
        const body = { userpass, dbpass };
        try {
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*", },
                body: JSON.stringify(body),
            });
            try {
                const data = await response.json();
                const bool = data['success']
                return bool;
              } catch(e) {
                console.log('error:', e.message);
              }

        } catch (error) {
            console.error(error);
        }
    }

    if(userid != undefined) {
        Router.push('/');
    }
    else{
        const verification = async (usernamev, passwordv) => {
            var response = false;
            await getUsers()
                .then(data => {
                    const user = data.find(({ username }) => username === usernamev);
                    console.log(user);
                    if (user) {
                        comparePassword(user['password'], passwordv).then((data) => {
                            if(data) {
                                cookies.set('userid', user['id']);
                                response = true;
                            }
                        });
                    }
                });
                return response;
        }
    
        const submitData = async (e: React.SyntheticEvent) => {
            e.preventDefault();
            verification(username, password).then((data) => {
                if(data) {
                    Router.push('/');
                }else{
                    Router.push('/');
                }
            });
        };
    
        return (
            <Layout>
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
                                        <a href="" onClick={() => Router.push('/')}><span className="text-muted">&leftarrow;</span></a>
                                        <h5
                                            className="card-title text-center mb-5 fw-light
                                        fs-5">
                                            Log in
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
                                                className="form-control"
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Password"
                                                type="password"
                                                value={password}
                                            />
                                            <label htmlFor="floatingPassword">Password</label>
    
                                        </div>
                                        <input disabled={!password || !username} type="submit" value="Enter" className="btn btn-primary btn-login text-uppercase fw-bold" />
                                        <a className="btn btn-inverse btn-login text-uppercase fw-bold" href="#" onClick={() => Router.push('/signup')}>
                                            Don't have an accout?
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
            </Layout>
        );
    }
};
