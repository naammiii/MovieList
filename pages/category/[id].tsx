import { useRouter } from 'next/router'
import Image from "next/image";
import Router from 'next/router';

import Layout from '../../components/Layout';
import Menu from '../../components/Menu';

import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

const apiKey = process.env.API_KEY;

const Category = ({categoryTitle, genres}) => {

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    for (let i = 0; i < categoryTitle.length; i++) {
        const element = categoryTitle[i];
        
        if(element && !element.primaryImage) categoryTitle[i].primaryImage = {url: '/images/404PosterNotFound.jpg'}
        if(!element) categoryTitle.splice(i, 1);
    }

    return (
        <>
        <Layout />
            <div className='position-absolute'>
            <Menu genres={genres}/>
            </div>
            <div className="container"  style={{ marginTop: '80px' }}>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {categoryTitle.map((title) => {
                return (
                        <div className="col" onClick={() => Router.push('/title/' + title.id)}>
                            <div className="card shadow-sm">
                            <Image src={title.primaryImage.url} alt={title.titleText.text} height={300} width={200}/>
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

        var categoryTitle = [];

        for (let i = 0; i < 33; i++) {
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
            categoryTitle[i] = result2.results;
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

        return { props: { categoryTitle, genres } };
}