import Head from 'next/head';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  useEffect(() => {
    "use strict";

/* ======= Header animation ======= */   
const header = document.getElementById('header');  

window.onload=function() 
{   
    headerAnimation(); 

};

window.onresize=function() 
{   
    headerAnimation(); 

}; 

window.onscroll=function() 
{ 
    headerAnimation(); 

}; 
    

function headerAnimation () {

    var scrollTop = window.scrollY;
	
	if ( scrollTop > 0 ) {	    
	    header.classList.add('header-scrolled');    
	    	    
	} else {
	    header.classList.remove('header-scrolled');
	}

};

let scrollLinks = document.querySelectorAll('.scrollto');
const pageNavWrapper = document.getElementById('navbar-collapse');

scrollLinks.forEach((scrollLink) => {

	scrollLink.addEventListener('click', (e) => {
		
		e.preventDefault();

		let element = document.querySelector(scrollLink.getAttribute("href"));
		
		const yOffset = 60; //page .header height
		
		//console.log(yOffset);
		
		const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
		
		window.scrollTo({top: y, behavior: 'smooth'});
		
		
		//Collapse mobile menu after clicking
		if (pageNavWrapper.classList.contains('show')){
			pageNavWrapper.classList.remove('show');
		}

		
    });
	
});

/* ======= Carousel animation ======= */ 
document.querySelector('.carousel .carousel-item').each(function(){
  var minPerSlide = 4;
  var next = document.querySelector(this).nextElementSibling;
  if (!next.length) {
  next = document.querySelector(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo(document.querySelector(this));
  
  for (var i=0;i<minPerSlide;i++) {
      next=next.nextElementSibling;
      if (!next.length) {
        next = document.querySelector(this).siblings(':first');
      }
      
      next.children(':first-child').clone().appendTo(document.querySelector(this));
    }
});


/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */

// Initialize Gumshoe
var spy = new Gumshoe('#navbar-collapse .nav-link', {
	offset: 60
});
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>MovieList</title>
        <link rel="icon" href="styles/images/logo.svg" />
        <link id="theme-style" rel="stylesheet" href="/css/home.css"></link>
      </Head>

      <header id="header" className={styles.header}>
        <nav className="main-nav navbar-expand-md" role="navigation">

            <div className="container-fluid position-relative">

                <a className="logo navbar-brand scrollto" href="#hero">
                    <span className="logo-icon-wrapper"><img className="logo-icon" src="images/logo-icon.svg"
                            alt="icon" /></span>
                    <span className="text"><span className="highlight">MOVIE</span>LIST</span>
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
                        <li className="nav-item"><a className="nav-link scrollto nav-access-btn font-weight-bold" href="">Access
                                the database</a></li>
                        <li className="nav-item"><a className="nav-link scrollto nav-access-btn font-weight-bold" > Log
                                in</a></li>
                    </ul>
                </div>
            </div>

        </nav>
    </header>

    <div id="hero" className="hero-section">

        <div id="hero-carousel" className="hero-carousel carousel carousel-fade slide" data-bs-ride="carousel"
            data-bs-interval="4000">

            <div className="figure-holder-wrapper">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="figure-box">
                            <div className="figure-holder2 start-50">
                                <img className="figure-image2 Image-fluid rounded float-end border border-white"
                                    src="/images/imac2.png" alt="image" />
                            </div>
                            <div className="figure-holder3 start-50">
                                <img className="figure-image3 Image-fluid rounded float-end border border-white"
                                    src="/images/imac3.png" alt="image" />
                            </div>
                            <div className="figure-holder1">
                                <img className="figure-image1 Image-fluid rounded float-end border border-white"
                                    src="/images/imac.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="carousel-inner">

                <div className="carousel-item item-1 active">
                    <div className="item-content container">
                        <div className="item-content-inner">

                            <h2 className="heading">MovieList is the best website <br className="d-none d-md-block" />to track
                                your media</h2>
                            <p className="intro">It helps you to check and organize all the audiovisual content whenever,
                                wherever!</p>
                            <a className="btn btn-primary btn-cta"
                                href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/appkit-landing-free-bootstrap-theme-for-developers-and-startups/"
                                target="_blank">Sign up now!</a>

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
                    <a className="btn btn-primary" href="" target="_blank">Find out more</a>

                </div>
            </div>
        </div>

        <div id="top">
            <div id="topM" className="carousel slide container carousel-group-item" data-bs-ride="carousel">
                <h2 className="section-title">Top most popular movies</h2>
                <div className="carousel-inner w-100">
                    <div className="carousel-item active">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac2.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#topM" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#topM" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div id="topS" className="carousel slide container carousel-group-item" data-bs-ride="carousel">
                <h2 className="section-title">Top most popular series</h2>
                <div className="carousel-inner w-100">
                    <div className="carousel-item active">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac2.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac3.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac3.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac3.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac3.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac3.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac3.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac3.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac3.png" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-md-3">
                            <div className="card card-body">
                                <img className="Image-fluid" src="/images/imac3.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#topS" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#topS" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
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