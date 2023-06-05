import { useRouter } from 'next/router'

import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';




const Title = ({titleInfo}) => {

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

  console.log(titleInfo);

  return (
  <>
    <div className="container">
    <h1>Información de la película</h1>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Título de la película</h5>
        <p className="card-text" id="titulo">{titleInfo.titleText.text}</p>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Género</h5>
        <p className="card-text" id="genero"></p>
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
        <p className="card-text" id="lanzamiento"></p>
      </div>
    </div>
  </div>
  </>
    )
}

export default Title

export async function getServerSideProps(context) {
    const { id } = context.query
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/' + id;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '70d8ea326bmshebaeb2f22378e8dp15e6cajsn5ef1f0fef6f4',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        const response = await fetch(url, options);
        const result = await response.json();
        const titleInfo = result.results;
        return { props: { titleInfo } };
}