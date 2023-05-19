import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { useEffect } from 'react';

function login(){

    useEffect(() => {
      import('bootstrap/dist/js/bootstrap');
    }, []);

    return (
        <div className={styles.container}>
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
                            <Link href="/">B</Link>
                            <h5 className="card-title text-center mb-5 fw-light fs-5">Log in</h5>
                            <img src="/images/logo.svg" width="50px" />
                        </div>
                        <form action="" method="post">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" name="usuario" value="" />
                                <label for="floatingInput">Username</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" name="cont" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="d-grid">
                                <input className="btn btn-primary btn-login text-uppercase fw-bold" name="enviar" type="submit" value="Log in" />
                            </div>
                            <hr className="my-4" />
                        </form>
                        <Link href="/signup" className="btn btn-inverse btn-login text-uppercase fw-bold">Don't have an account? Click here! </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default login;