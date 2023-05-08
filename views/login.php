<!DOCTYPE html>
<html lang="en">

<head>
    <title>MovieList - Log in</title>
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
    <link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css">
    <!-- Theme CSS -->
    <link id="theme-style" rel="stylesheet" href="assets/css/styles.css">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card border-0 shadow rounded-3 my-5">
                    <div class="card-body p-4 p-sm-5">
                        <div style="justify-content: space-between; display: flex;">
                            <a href=""><span class="text-muted">&leftarrow;</span></a>
                            <h5 class="card-title text-center mb-5 fw-light fs-5" style="width: max-content;">Log in</h5>
                            <img src="assets/images/logo.svg" width="50px">
                        </div>
                        <form action="" method="post">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="usuario" value="">
                                <label for="floatingInput">Username</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" name="cont">
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div class="d-grid">
                                <input class="btn btn-primary btn-login text-uppercase fw-bold" name="enviar" type="submit" value="Log in">
                            </div>
                            <hr class="my-4">
                        </form>
                        <form action="registro.php">
                            Don't have an account?
                            <input class="btn btn-inverse btn-login text-uppercase fw-bold" name="registrarse" type="submit" value='Sign up'>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Javascript -->
    <script src="assets/plugins/jquery-3.6.4.min.js"></script>
    <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/plugins/gumshoe/gumshoe.polyfills.min.js"></script>
    <script src="assets/js/main.js"></script>
</body>

</html>