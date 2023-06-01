import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Carousel from '../components/Carousel';

import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';


export default function Home ()
{

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    async function getPopularMovies() {
        try {
            const response = fetch('/api/get/getMovies', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });

            const users = (await response).json();
            return users;

        } catch (error) {
            console.error(error);
        }
    }    
    const popularMovies = getPopularMovies()
    .then(data => {
        console.log(data);
    });

    return (
        <div className={styles.container}>
            <Layout />
            <div className='d-flex' style={{marginTop: '80px'}}>
            <Menu />
            <Carousel title='No te olvides!' data={popularMovies}/>
            </div>
        </div>
    )
}
