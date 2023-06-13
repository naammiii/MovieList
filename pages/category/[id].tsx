import { useRouter } from 'next/router'
import Image from "next/image";
import Router from 'next/router';

import Layout from '../../components/Layout';
import Menu from '../../components/Menu';

import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

const apiKey = process.env.API_KEY;

const Category = ({ categoryTitle, genres }) => {

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);
    console.log('aaaaa');
    console.log(categoryTitle);

    for (let i = 0; i < categoryTitle.length; i++) {
        const element = categoryTitle[i];

        if (element && !element.primaryImage) categoryTitle[i].primaryImage = { url: '/images/404PosterNotFound.jpg' }
        if (!element) categoryTitle.splice(i, 1);
    }

    return (
        <>
            <Layout />
            <div className='position-absolute'>
                <Menu genres={genres} />
            </div>
            <div className="container" style={{ marginTop: '80px' }}>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {categoryTitle.map((title) => {
                        return (
                            <div className="col" onClick={() => Router.push('/title/' + title.id)}>
                                <div className="card shadow-sm">
                                    <Image src={title.primaryImage.url} alt={title.titleText.text} height={300} width={200} />
                                    <div className="card-body">
                                        <p className="card-text">{title.originalTitleText.text}</p>
                                    </div>
                                </div>
                            </div>


                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Category

export async function getServerSideProps(context) {
    const { id } = context.query;
    const url = 'https://imdb8.p.rapidapi.com/title/v2/get-popular-movies-by-genre?genre=' + id.toLowerCase() + '&limit=21';
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

    var code = '';

    for (let i = 0; i < 21; i++) {
        code = code + result[i] + '%2C';
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
    const categoryTitle = resulttv2.results;

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

    return { props: { categoryTitle, genres } };
}