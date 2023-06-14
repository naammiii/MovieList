
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic'
import { title } from 'process';
import prisma from '../lib/prisma';
import Cookies from 'universal-cookie';


const Carousel = dynamic(() => import('../components/Carousel'))
const Menu = dynamic(() => import('../components/Menu'))
const Layout = dynamic(() => import('../components/Layout'))

const apiKey = process.env.API_KEY;

export default function Home({ titleInfo, titleTVInfo, genres, userp, userid }) {

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    return (
        <div className={styles.container}>
            <Layout username={userp.username} />
            <div className='position-absolute'>
                <Menu genres={genres} />
            </div>
            <div className='' style={{ marginTop: '80px' }}>
                <Carousel data={titleInfo} title={'Top Movies'} />
                <br />
                <Carousel data={titleTVInfo} title={'Top TV Series'} />
            </div>
        </div>

    )
}
export async function getServerSideProps({req, res}, context) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
      )

      
        const cookies = new Cookies(req.headers.cookie);
      const userid = parseInt(cookies.get('userid')) ;

    const userp =  userid ? await prisma.user.findUnique({
        where: { id: userid }
    }) : '';

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
    var code = '';
    for (let i = 0; i < 9; i++) {
        code = code + result[i] + '%2C';
    }
    const url2 = 'https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=' + code;
    const options2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    const response2 = await fetch(url2, options2);
    const result2 = await response2.json();
    titleInfo = result2.results;


    const urltv = 'https://imdb8.p.rapidapi.com/title/get-most-popular-tv-shows?homeCountry=ES&purchaseCountry=ES&currentCountry=ES';
    const optionstv = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    const responsetv = await fetch(urltv, optionstv);
    const resulttv = await responsetv.json();

    resulttv.forEach((element, index) => {
        resulttv[index] = element.substring(7, 16);
    });


    var titleTVInfo = [];
    var code = '';
    for (let i = 0; i < 9; i++) {
        code = code + resulttv[i] + '%2C';
    }
    const urltv2 = 'https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=' + code;
    const optionstv2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    const responsetv2 = await fetch(urltv2, optionstv2);
    const resulttv2 = await responsetv2.json();
    titleTVInfo = resulttv2.results;

    const urlg = 'https://moviesdatabase.p.rapidapi.com/titles/utils/genres';
    const optionsg = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    const responseg = await fetch(urlg, optionsg);
    let genres = await responseg.json();
    genres = genres.results;
    genres.splice(0, 1);



    return { props: { titleInfo, titleTVInfo, genres, userp, userid } };
}