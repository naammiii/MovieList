import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Carousel from '../components/Carousel';

import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

const apiKey = process.env.API_KEY;

export default function Home({ titleInfo, genres }) {

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);


    return (
        <div className={styles.container}>
            <Layout />
            <div className='d-flex' style={{ marginTop: '80px' }}>
                <Menu genres={genres}/>
                <h2>Top Movies</h2>
                <Carousel data={titleInfo} />
            </div>
        </div>
    )
}
export async function getServerSideProps() {
    const url = 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=ES&purchaseCountry=ES&currentCountry=ES';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    const response = await fetch(url, options);
    const result = await response.json();

    result.forEach((element, index) => {
        result[index] = element.substring(7, 16);
    });

    var titleInfo = [];

    for (let i = 0; i < 9; i++) {
        const code = result[i];
        const url2 = 'https://moviesdatabase.p.rapidapi.com/titles/' + code;
        const options2 = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        const response2 = await fetch(url2, options2);
        const result2 = await response2.json();
        titleInfo[i] = result2.results;
    }
    const urlg = 'https://imdb8.p.rapidapi.com/title/list-popular-genres';
    const optionsg = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
  
    const responseg = await fetch(urlg, optionsg);
    const genres = await responseg.json();

    return { props: { titleInfo, genres } };
}