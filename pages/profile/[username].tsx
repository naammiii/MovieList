
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import List from '../../components/List';
import React, { useState } from "react";
import { useRouter } from "next/router";
import prisma from '../../lib/prisma';
import dynamic from 'next/dynamic'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Carousel = dynamic(() => import('../../components/Carousel'))
const Layout = dynamic(() => import('../../components/Layout'))

import {
    Button,
    Card,
    CardBody,
    Form,
    Input,
    Modal,
    Label,
} from "reactstrap";

import Router from 'next/router';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const userid: number = cookies.get('userid');

const apiKey = process.env.API_KEY;

export default function Profile({ users, listname, displaylist, userp, recomendation, recMovName }) {

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    const router = useRouter();
    const { username } = router.query;

    const [modalFormOpenP, setModalFormOpenP] = React.useState(false);
    const [pass, setPass] = useState('');
    const [passc, setPassc] = useState('');


    const [modalNotificationErrorOpen, setModalNotificationErrorOpen] = React.useState(
        false
    );

    async function changePassword() {
        if (pass == passc) {

            const body = { pass, userid };
            try {
                await fetch('/api/post/updatePass', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                });


            } catch (err) {
            }

        } else {
            setModalFormOpenP(false);
            setModalNotificationErrorOpen(true);
        }
    }


    if (userp) {

        var user = users.find(({ id }) => id == userid);
        var isUser = false;
        if (user && user.username == username) isUser = true;

        if (isUser) {
            return (
                <>
                    <Layout username={username} />
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="card mt-5">
                                    <div className="card-body">

                                        <a style={{ cursor: 'pointer' }} onClick={() => Router.back()}><ArrowBackIcon /></a>
                                        <h5 className="card-title">Welcome @{userp.username}</h5>
                                        <div className="card-text">

                                            <p>Name: {userp.name}</p>
                                            <button type="button" className="btn btn-link btn-sm btn-rounded changepass" onClick={() => { setModalFormOpenP(true) }}>
                                                Change Password
                                            </button>
                                        </div>
                                        <hr />
                                    </div>
                                    <List listname={listname} userP={displaylist} isUser={isUser} />
                                </div>
                            </div>
                        </div>
                        {recomendation.length != 0 ? <Carousel data={recomendation} title={'Because you watched ' + recMovName} swipe={false} /> : null}
                        <Modal isOpen={modalFormOpenP} toggle={() => setModalFormOpenP(false)}>
                            <div className=" modal-body p-0">
                                <Card className=" bg-primary shadow border-0">

                                    <CardBody className=" px-lg-5 py-lg-5">
                                        <Form role="form" onSubmit={changePassword}>
                                            <Label for="exampleSelect">New Password</Label>
                                            <Input type="password" id="newPass" onChange={(e) => setPass(e.target.value)} value={pass}></Input>
                                            <Label for="exampleSelect">Confirm Password</Label>
                                            <Input type="password" id="conPass" onChange={(e) => setPassc(e.target.value)} value={passc}></Input>
                                            <Button className=" my-4" color="primary" type="submit">
                                                Change
                                            </Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </div>
                        </Modal>
                        <Modal
                            isOpen={modalNotificationErrorOpen}
                            className="modal-danger"
                            contentClassName="bg-gradient-danger"
                            onClick={() => setModalNotificationErrorOpen(false)}
                        >
                            <div className=" modal-header">
                                <h6 className=" modal-title" id="modal-title-notification">
                                    Error in the form
                                </h6>
                                <button
                                    aria-label="Close"
                                    className=" close"
                                    onClick={() => setModalNotificationErrorOpen(false)}
                                    type="button"
                                >
                                    <span aria-hidden={true}>×</span>
                                </button>
                            </div>
                            <div className=" modal-body">
                                <div className=" py-3 text-center">
                                    <i className=" ni ni-bell-55 ni-3x"></i>
                                    <h4 className=" heading mt-4">Error creating the user</h4>
                                    <p>
                                        Password do not match. Please, try again.
                                    </p>
                                </div>
                            </div>
                            <div className=" modal-footer">
                                <Button className=" btn-white" color="default" type="button">
                                    Ok, Got it
                                </Button>
                                <Button
                                    className=" text-white ml-auto"
                                    color="link"
                                    onClick={() => setModalNotificationErrorOpen(false)}
                                    type="button"
                                >
                                    Close
                                </Button>
                            </div>
                        </Modal>
                    </div>
            <style jsx>{`
            .changepass{
                text-decoration: none;
                color: #3aa7aa;
                font-weight: bold;
            }
            .changepass:hover {
                background-color: grey;
                text-decoration: underline;
                color: white;

            }
          `}</style>

                </>
            );
        }
        else {
            return (
                <>
                    <Layout username={username} />
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="card mt-5">
                                    <div className="card-body">
                                        <a style={{ cursor: 'pointer' }} onClick={() => Router.back()}><ArrowBackIcon /></a>
                                        <h5 className="card-title">@{userp.username}'s profile. </h5>
                                        <div className="card-text">

                                            <p>Name: {userp.name}</p>
                                        </div>
                                    </div>
                                    <List listname={listname} userP={displaylist} isUser={isUser} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }

    } else {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <a style={{ cursor: 'pointer' }} onClick={() => Router.back()}><ArrowBackIcon /></a>
                                    <h5 className="card-title">ERROR 404: Not found </h5>
                                    <div className="card-text">
                                        <p>@{username} does not exist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export const getServerSideProps = async (context) => {
    const users = await prisma.user.findMany();

    const listname = await prisma.category.findMany();

    const { username } = context.query;
    const userp = await prisma.user.findUnique({
        where: { username: username }
    })

    let recomendation = [];
    let recMovName = '';
    let displaylist = [];

    if (userp) {

        const listofuser = await prisma.list.findMany({
            where: { userId: userp.id },
        })


        for (let i = 0; i < listofuser.length; i++) {
            const element = listofuser[i];
            if (!displaylist[element.categoryId]) displaylist[element.categoryId] = [];

            const url = 'https://moviesdatabase.p.rapidapi.com/titles/' + element.itemId + '?info=base_info';
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

        if (displaylist[2] != null) {

            const movcomp = displaylist[2].length;
            const index = Math.floor(Math.random() * (movcomp + 1));

            const recMov = displaylist[2][index];
            const recGen = recMov.genres.genres[0].text;
            recMovName = recMov.originalTitleText.text;

            const urlrec = 'https://imdb8.p.rapidapi.com/title/v2/get-popular-movies-by-genre?genre=' + recGen.toLowerCase() + '&limit=24';
            const optionsrec = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '70d8ea326bmshebaeb2f22378e8dp15e6cajsn5ef1f0fef6f4',
                    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
            };

            const responserec = await fetch(urlrec, optionsrec);
            const resultrec = await responserec.json();


            resultrec.forEach((element, index) => {
                resultrec[index] = element.substring(7, (element.length - 1));
            });

            var code = '';

            for (let i = 0; i < 21; i++) {
                code = code + resultrec[i] + '%2C';
            }

            const urltv2 = 'https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=' + code + '?info=extendedCast';
            const optionstv2 = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': apiKey,
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };
            const responsetv2 = await fetch(urltv2, optionstv2);
            const resulttv2 = await responsetv2.json();
            const moviesbygenre = resulttv2.results;


            const urlac = 'https://moviesdatabase.p.rapidapi.com/titles/' + recMov.id + '?info=extendedCast';
            const optionsac = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '70d8ea326bmshebaeb2f22378e8dp15e6cajsn5ef1f0fef6f4',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };

            const responseac = await fetch(urlac, optionsac);
            const resultac = await responseac.json();
            const actorrecid = resultac.results.cast.edges[0].node.name.id;

            const urlacif = 'https://moviesdatabase.p.rapidapi.com/actors/' + actorrecid;
            const optionsacif = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '70d8ea326bmshebaeb2f22378e8dp15e6cajsn5ef1f0fef6f4',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };
            const responseacif = await fetch(urlacif, optionsacif);
            const resultacif = await responseacif.json();
            const actorinfo = resultacif.results;
            const knownforcode = actorinfo.knownForTitles.replace(',', '%2C');

            const urlkn = 'https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=' + knownforcode + '&info=base_info';
            const optionskn = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '70d8ea326bmshebaeb2f22378e8dp15e6cajsn5ef1f0fef6f4',
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };

            const responsekn = await fetch(urlkn, optionskn);
            const resultkn = await responsekn.json();

            const actorKnownFor = resultkn.results;

            actorKnownFor.forEach(title => {
                title.genres.genres.forEach(genre => {
                    if (genre.text.toLowerCase() == recGen.toLowerCase()) {
                        recomendation.push(title);
                    }
                })
            });

            for (let i = 0; i < 9; i++) {
                recomendation.push(moviesbygenre[i]);
            }

        }

    }
    return { props: { users, listname, displaylist, userp, recomendation, recMovName } };
};