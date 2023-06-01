
import Cookies from 'universal-cookie';
import Router from 'next/router';

const cookies = new Cookies();
const userid = cookies.get('userid');

export default function Logout()
{
    
    cookies.remove('userid');
    Router.push('/home');
}