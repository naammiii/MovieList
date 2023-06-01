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
    return (
        <div className={styles.container}>
            <Layout />
            <div className='d-flex' style={{marginTop: '80px'}}>
            <Menu />
            <Carousel title='No te olvides!'/>
            </div>
        </div>
    )
}
