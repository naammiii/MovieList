
import Cookies from 'universal-cookie';
import Router from 'next/router';

const cookies = new Cookies();
const userid = cookies.get('userid');

export default function Logout()
{
    
    cookies.remove('userid');

    return(
        <>
        <h1>has salido de la sesion</h1>
        <button onClick={() => Router.push('/home')}> next </button>
        </>
    )
}