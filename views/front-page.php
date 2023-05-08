<!DOCTYPE html>
<html lang="en">

<head>
    <title>MovieList</title>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Final Grade Project called MovieList">
    <meta name="author" content="Iman Boukaich Talai">
    <link rel="shortcut icon" href="assets/images/logo.svg">
    <link
        href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800'
        rel='stylesheet' type='text/css'>
    <!-- FontAwesome JS-->
    <script defer src="assets/fontawesome/js/all.min.js"></script>
    <!-- Global CSS -->
    <link rel="stylesheet" href="views/assets/plugins/bootstrap/css/bootstrap.min.css">
    <!-- Theme CSS -->
    <link id="theme-style" rel="stylesheet" href="views/assets/css/styles.css">

</head>

<body>
    <!-- ******HEADER****** -->
    <header id="header" class="header">
        <nav class="main-nav navbar-expand-md" role="navigation">

            <div class="container-fluid position-relative">

                <a class="logo navbar-brand scrollto" href="#hero">
                    <span class="logo-icon-wrapper"><img class="logo-icon" src="views/assets/images/logo-icon.svg"
                            alt="icon"></span>
                    <span class="text"><span class="highlight">MOVIE</span>LIST</span>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-collapse"
                    aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <div id="navbar-collapse" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav ms-md-auto">
                        <li class="nav-item "><a class="nav-link scrollto" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link scrollto" href="#top">Top</a></li>
                        <li class="nav-item"><a class="nav-link scrollto" href="#contact">Contact</a></li>
                        <li class="nav-item"><a class="nav-link scrollto nav-access-btn font-weight-bold" href="">Access
                                the database</a></li>
                        <li class="nav-item"><a class="nav-link scrollto nav-access-btn font-weight-bold" > Log
                                in</a></li>
                    </ul>
                </div>
            </div>

        </nav>
    </header>

    <div id="hero" class="hero-section">

        <div id="hero-carousel" class="hero-carousel carousel carousel-fade slide" data-bs-ride="carousel"
            data-bs-interval="4000">

            <div class="figure-holder-wrapper">
                <div class="container">
                    <div class="row justify-content-end">
                        <div class="figure-box">
                            <div class="figure-holder2 start-50">
                                <img class="figure-image2 img-fluid rounded float-end border border-white"
                                    src="views/assets/images/imac2.png" alt="image" />
                            </div><!--//figure-holder-->
                            <div class="figure-holder3 start-50">
                                <img class="figure-image3 img-fluid rounded float-end border border-white"
                                    src="views/assets/images/imac3.png" alt="image" />
                            </div><!--//figure-holder-->
                            <div class="figure-holder1">
                                <img class="figure-image1 img-fluid rounded float-end border border-white"
                                    src="views/assets/images/imac.png" alt="image" />
                            </div><!--//figure-holder-->
                        </div>
                    </div><!--//row-->
                </div><!--//container-->
            </div><!--//figure-holder-wrapper-->

            <!-- Wrapper for slides -->
            <div class="carousel-inner">

                <div class="carousel-item item-1 active">
                    <div class="item-content container">
                        <div class="item-content-inner">

                            <h2 class="heading">MovieList is the best website <br class="d-none d-md-block">to track
                                your media</h2>
                            <hr>
                            <p class="intro">It helps you to check and organize all the audiovisual content whenever,
                                wherever!</p>
                            <a class="btn btn-primary btn-cta"
                                href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/appkit-landing-free-bootstrap-theme-for-developers-and-startups/"
                                target="_blank">Sign up now!</a>

                        </div><!--//item-content-inner-->
                    </div><!--//item-content-->
                </div><!--//item-->->

            </div><!--//carousel-->
        </div><!--//hero-->

        <!-- ******ABOUT SECCION****** -->
        <div id="about" class="about-section">
            <div class="container text-center">
                <h2 class="section-title">Why Use MovieList?</h2>
                <p class="intro">MovieList allows you to consult data from different movies and series and also allows
                    you to categorize them in different groups depending of their status</p>

                <div class="items-wrapper row">
                    <div class="item col-md-4 col-12">
                        <div class="item-inner">
                            <div class="figure-holder">
                                <img class="figure-image" src="views/assets/images/list.svg" alt="image">
                            </div><!--//figure-holder-->
                            <h3 class="item-title">Set the ideal status</h3>
                            <div class="item-desc mb-3">
                                Nowadays it's a challenge organize the audiovisual content that a person follow.
                                MovieList helps you to organize the content of your list depending on various status!
                            </div><!--//item-desc-->
                        </div><!--//item-inner-->
                    </div><!--//item-->
                    <div class="item col-md-4 col-12">
                        <div class="item-inner">
                            <div class="figure-holder">
                                <img class="figure-image" src="views/assets/images/stars.svg" alt="image">
                            </div><!--//figure-holder-->
                            <h3 class="item-title">Find your next favorite!</h3>
                            <div class="item-desc mb-3">
                                Our site makes easy and simple find information about any media. With our user-friendly
                                interface you will have no problem getting the info you need!
                            </div><!--//item-desc-->
                        </div><!--//item-inner-->
                    </div><!--//item-->
                    <div class="item col-md-4 col-12">
                        <div class="item-inner">
                            <div class="figure-holder">
                                <img class="figure-image" src="views/assets/images/debate.svg" alt="image">
                            </div><!--//figure-holder-->
                            <h3 class="item-title">Contact with the world</h3>
                            <div class="item-desc mb-3">
                                You are not alone! In the world there are a lot of people with similar interests as you.
                                MovieList make easy to connect and share opinions with others!
                            </div><!--//item-desc-->
                        </div><!--//item-inner-->
                    </div><!--//item-->
                    <a class="btn btn-primary" href="" target="_blank">Find out more</a>

                </div><!--//items-wrapper-->
            </div><!--//container-->
        </div><!--//about-section-->

        <!-- ****** TOP ******-->
        <div id="top">
            <div id="topM" class="carousel slide container carousel-group-item" data-bs-ride="carousel">
                <h2 class="section-title">Top most popular movies</h2>
                <hr>
                <div class="carousel-inner w-100">
                    <div class="carousel-item active">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac2.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                </div><!--//carousel-inner-->
                <button class="carousel-control-prev" type="button" data-bs-target="#topM" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button><!--//carousel-control-prev-->
                <button class="carousel-control-next" type="button" data-bs-target="#topM" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button><!--//carousel-control-next-->
            </div><!--//carousel topM-->

            <div id="topS" class="carousel slide container carousel-group-item" data-bs-ride="carousel">
                <h2 class="section-title">Top most popular series</h2>
                <hr>
                <div class="carousel-inner w-100">
                    <div class="carousel-item active">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac2.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac3.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac3.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac3.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac3.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac3.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac3.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac3.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac3.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                    <div class="carousel-item">
                        <div class="col-md-3">
                            <div class="card card-body">
                                <img class="img-fluid" src="views/assets/images/imac3.png">
                            </div><!--//card-body-->
                        </div><!--//col-->
                    </div><!--//carousel-item-->
                </div><!--//carousel-inner-->
                <button class="carousel-control-prev" type="button" data-bs-target="#topS" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#topS" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div><!--//carousel topS-->
        </div><!--//top-->

        <div id="contact" class="contact-section">
            <div class="container text-center">
                <h2 class="section-title">Contact Us</h2>
                <div class="contact-content">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis.</p>

                </div>
                <a class="btn btn-cta btn-primary" href="">Contact now</a>

            </div><!--//container-->
        </div><!--//contact-section-->

        <footer class="footer text-center">
            <div class="container">
                <small class="copyright">Created by <strong>Iman Boukaich Talai</strong> with <strong>blood and
                        tears of my enemies</strong></small>
            </div><!--//container-->
        </footer><!--//footer-->

        <!-- Javascript -->
        <script src="views/assets/plugins/jquery-3.6.4.min.js"></script>
        <script src="views/assets/plugins/bootstrap/js/bootstrap.min.js"></script>
        <script src="views/assets/plugins/gumshoe/gumshoe.polyfills.min.js"></script>
        <script src="views/assets/js/main.js"></script>

</body>

</html>