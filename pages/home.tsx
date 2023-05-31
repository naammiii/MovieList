import Layout from '../components/Layout';
import Menu from '../components/Menu';

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
            <Menu />
        </div>
    )
}
