import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/Home.module.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import Router from 'next/router';

import Carousel from '../components/Carousel';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>MovieList</title>
        <link rel="icon" href="styles/images/logo.svg" />
        <link id="theme-style" rel="stylesheet" href="/css/home.css"></link>
      </Head>

      <header id="header" className={styles.header}>
        <nav className="main-nav navbar-expand-md" role="navigation">

            <div className="container-fluid position-relative d-flex mt-3">

                <a className="logo navbar-brand scrollto" style={{fontSize: '24px'}} href="#hero">
                    <span className="logo-icon-wrapper"><img className="logo-icon" src="images/logo.svg"
                            alt="icon" style={{width: 30}}/></span>
                    <span className="text" style={{color: '#40babd' }}><b className="highlight"> MOVIE</b> LIST</span>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse"
                    aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

                <div id="navbar-collapse" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav ms-md-auto">
                        <li className="nav-item "><a className="nav-link scrollto" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#top">Top</a></li>
                        <li className="nav-item"><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        <li className="nav-item"><a className="nav-link scrollto nav-access-btn font-weight-bold" onClick={() => Router.push('/home')} style={{cursor: 'pointer'}}>Access
                                the database</a></li>
                        <li className="nav-item"><a onClick={() => Router.push('/login')} className="nav-link scrollto nav-access-btn font-weight-" style={{cursor: 'pointer'}}> Log in </a></li>
                    </ul>
                </div>
            </div>

        </nav>
    </header>

    <div id="hero" className="hero-section">

        <div id="hero-carousel" className="hero-carousel carousel carousel-fade slide" data-bs-ride="carousel"
            data-bs-interval="4000">

            <div className="carousel-inner">

                <div className="carousel-item item-1 active">
                    <div className="item-content container">
                        <div className="item-content-inner">

                            <h2 className="heading">MovieList is the best website <br className="d-none d-md-block" />to track
                                your media</h2>
                            <p className="intro">It helps you to check and organize all the audiovisual content whenever,
                                wherever!</p>
                            <a className="btn btn-primary btn-cta"
                                 style={{cursor: 'pointer'}} onClick={() => Router.push('/signup')}>Sign up now!</a>

                        </div>
                    </div>
                </div>

            </div>
        </div>
</div>

        <div id="about" className="about-section">
          
            <div className="container text-center">
                <h2 className="section-title">Why Use MovieList?</h2>
                <p className="intro">MovieList allows you to consult data from different movies and series and also allows
                    you to categorize them in different groups depending of their status</p>

                <div className="items-wrapper row">
                    <div className="item col-md-4 col-12">
                        <div className="item-inner">
                            <div className="figure-holder">
                                <img className="figure-image" src="/images/list.svg" alt="image" />
                            </div>
                            <h3 className="item-title">Set the ideal status</h3>
                            <div className="item-desc mb-3">
                                Nowadays it's a challenge organize the audiovisual content that a person follow.
                                MovieList helps you to organize the content of your list depending on various status!
                            </div>
                        </div>
                    </div>
                    <div className="item col-md-4 col-12">
                        <div className="item-inner">
                            <div className="figure-holder">
                                <img className="figure-image" src="/images/stars.svg" alt="image" />
                            </div>
                            <h3 className="item-title">Find your next favorite!</h3>
                            <div className="item-desc mb-3">
                                Our site makes easy and simple find information about any media. With our user-friendly
                                interface you will have no problem getting the info you need!
                            </div>
                        </div>
                    </div>
                    <div className="item col-md-4 col-12">
                        <div className="item-inner">
                            <div className="figure-holder">
                                <img className="figure-image" src="/images/debate.svg" alt="image" />
                            </div>
                            <h3 className="item-title">Contact with the world</h3>
                            <div className="item-desc mb-3">
                                You are not alone! In the world there are a lot of people with similar interests as you.
                                MovieList make easy to connect and share opinions with others!
                            </div>
                        </div>
                    </div>
                    <a className="btn btn-primary" onClick={() => Router.push('/home')} style={{cursor: 'pointer'}} >Find out more</a>

                </div>
            </div>
        </div>

        <div id="top">
           {/* <Carousel title='Top movies' />

           <Carousel title='Top tv series' /> */}
        </div>

        <div id="contact" className="contact-section">
            <div className="container text-center">
                <h2 className="section-title">Contact Us</h2>
                <div className="contact-content">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis.</p>

                </div>
                <a className="btn btn-cta btn-primary" href="">Contact now</a>

            </div>
        </div>

        <footer className="footer text-center">
            <div className="container">
                <small className="copyright">Created by <strong>Iman Boukaich Talai</strong> with <strong>blood and
                        tears of my enemies</strong></small>
            </div>
        </footer>
      </div>
  )
}

export default Home;