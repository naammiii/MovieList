import { useRouter } from 'next/router'

import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';


const Title = () => {

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

  const router = useRouter()
  const { id } = router.query

  

  return (
  <>
    <div className="container">
    <h1>Información de la película</h1>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Título de la película</h5>
        <p className="card-text" id="titulo">{id}</p>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Género</h5>
        <p className="card-text" id="genero">{id}</p>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Sinopsis</h5>
        <p className="card-text" id="sinopsis"></p>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Año de lanzamiento</h5>
        <p className="card-text" id="lanzamiento">{id}</p>
      </div>
    </div>
  </div>
  </>
    )
}

export default Title