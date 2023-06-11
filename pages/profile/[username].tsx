
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import List from '../../components/List';
import { useRouter } from "next/router";
import prisma from '../../lib/prisma';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Router from 'next/router';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const userid: number = cookies.get('userid');

const apiKey = process.env.API_KEY;

export default function Profile({ users, listname, displaylist, userp }) {

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    const router = useRouter();
    const { username } = router.query;
    var user = users.find(({ id }) => id == userid);

    console.log('aaa');
    console.log(userp);

    if (user && user.username == username) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card">
                                <div className="card-body">

                                    <a  style={{cursor: 'pointer'}} onClick={() => Router.back()}><ArrowBackIcon /></a>
                                    <h5 className="card-title">Welcome @{userp.username}</h5>
                                    <div className="card-text">

                                        <p>Name: {userp.name}</p>
                                        <p>Password: Change password</p>
                                    </div>
                                    <hr />
                                </div>
                                <List listname={listname} userP={displaylist} />
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
    else {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <a  style={{cursor: 'pointer'}} onClick={() => Router.back()}><ArrowBackIcon /></a>
                                    <h5 className="card-title">@{userp.username}'s profile. </h5>
                                    <div className="card-text">
                                        
                                        <p>Name: {userp.name}</p>
                                    </div>
                                </div>
                                <List listname={listname} userP={displaylist} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export const getServerSideProps = async (context) => {
    const users = await prisma.user.findMany();

    const listname = await prisma.category.findMany();

    const { username } = context.query;
    const userp = await prisma.user.findUnique({
        where: { username: username }
    })

    const listofuser = await prisma.list.findMany({
        where: { userId: userp.id },
    })

    var displaylist = [];

    for (let i = 0; i < listofuser.length; i++) {
        const element = listofuser[i];
        if(!displaylist[element.categoryId]) displaylist[element.categoryId] = [];

        const url = 'https://moviesdatabase.p.rapidapi.com/titles/' + element.itemId;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
          }
        };
        const response = await fetch(url, options);
        const result = await response.json();
        const titleInfo = result.results;


        displaylist[element.categoryId].push(titleInfo);
    }

    console.log(displaylist);

    return { props: { users, listname, displaylist, userp } };
};