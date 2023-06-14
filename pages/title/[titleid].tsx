
import Router from 'next/router';
import Image from "next/image";
import React, { useState } from "react";
import prisma from '../../lib/prisma';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/Home.module.css';
import { GetServerSideProps } from "next";
import { useEffect } from 'react';
import dynamic from 'next/dynamic'
import {
  Button,
  Card,
  CardBody,
  Form,
  Input,
  Modal,
  Label,
} from "reactstrap";

import Cookies from 'universal-cookie';

const cookies = new Cookies();
const userid: number = cookies.get('userid');


const Menu = dynamic(() => import('../../components/Menu'))
const Layout = dynamic(() => import('../../components/Layout'))

const apiKey = process.env.API_KEY;

const Title = ({ titleInfo, titleid, listname, cast, genres, userp }) => {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  const [modalFormOpen, setModalFormOpen] = React.useState(false);
  const [list, setList] = useState('');

  if (!titleInfo.primaryImage) titleInfo.primaryImage = { url: '/images/404PosterNotFound.jpg' }
  if (!titleInfo.releaseYear) titleInfo.releaseYear = { year: 'unknown' }

  console.log(cast);


  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const categoryid = list;
    const body = { titleid, userid, categoryid };
    try {
      await fetch('/api/post/addListItem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      setModalFormOpen(false)

    } catch (err) {
      console.log(err);
    }
  };

  if (userid == undefined) {
    return (
      <>
        <Layout username={userp.username} />
        <div className='position-absolute'>
          <Menu genres={genres} />
        </div>
        <div className='' style={{ marginTop: '80px' }}>
          <div className="container">
            <div className="card mt-5 ">
              <div className="card-body d-flex">
                <Image src={titleInfo.primaryImage.url} alt={titleInfo.originalTitleText.text} height={300} width={200} className='m-5' />
                <div className='m-5'>
                  <h5 className="card-title">{titleInfo.originalTitleText.text}</h5>
                  <p className="card-text">{titleInfo.plot.plotText.plainText}</p>
                  <p className="card-text"><strong>Genres:</strong> &nbsp; &nbsp;
                    {titleInfo.genres.genres.map((genre) => {
                      return (
                        <a onClick={() => Router.push('/category/' + genre.text)} style={{ cursor: 'pointer' }} className="link-dark d-inline-flex text-decoration-none rounded">{genre.text}&nbsp; &nbsp; </a>
                      )
                    })}
                  </p>
                  <p className="card-text"><strong>Relase Year:</strong> {titleInfo.releaseYear.year}</p>
                  <div className="card-text"><strong>Cast:</strong> &nbsp; &nbsp;
                    {cast.map((actor) => {
                      return (
                        <p><u>{actor.node.name.nameText.text}</u> as <u>{actor.node.characters[0].name}</u> &nbsp; &nbsp; </p>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )

  } else {

    return (
      <>
        <Layout username={userp.username} />
        <div className='position-absolute'>
          <Menu genres={genres} />
        </div>
        <div className='' style={{ marginTop: '80px' }}>
          <div className="container">
            <div className="card mt-5 ">
              <div className="card-body d-flex">
                <Image src={titleInfo.primaryImage.url} alt={titleInfo.originalTitleText.text} height={300} width={200} className='m-5' />
                <div className='m-5'>
                  <h5 className="card-title">{titleInfo.originalTitleText.text}</h5>
                  <p className="card-text">{titleInfo.plot.plotText.plainText}</p>
                  <p className="card-text"><strong>Genres:</strong> &nbsp; &nbsp;
                    {titleInfo.genres.genres.map((genre) => {
                      return (
                        <a onClick={() => Router.push('/category/' + genre.text)} style={{ cursor: 'pointer' }} className="link-dark d-inline-flex text-decoration-none rounded">{genre.text}&nbsp; &nbsp; </a>
                      )
                    })}
                  </p>
                  <p className="card-text"><strong>Relase Year:</strong> {titleInfo.releaseYear.year}</p>
                  <div className="card-text"><strong>Cast:</strong> &nbsp; &nbsp;
                    {cast.map((actor) => {
                      return (
                        <p><u>{actor.node.name.nameText.text}</u> as <u>{actor.node.characters[0].name}</u> &nbsp; &nbsp; </p>
                      )
                    })}
                  </div>
                  <Button
                    block
                    color="default"
                    onClick={() => setModalFormOpen(true)}
                    type="button"
                  >
                    ADD TO LIST
                  </Button>
                </div>

              </div>
            </div>
            <Modal isOpen={modalFormOpen} toggle={() => setModalFormOpen(false)}>
              <div className=" modal-body p-0">
                <Card className="shadow border-0" style={{backgroundColor: '#40babd'}}>

                  <CardBody className=" px-lg-5 py-lg-5">
                    <Form role="form" onSubmit={submitData}>
                      <Label for="exampleSelect" style={{color: 'white'}}>SELECT LIST</Label>
                      <Input type="select" name="select" id="exampleSelect" onChange={(e) => setList(e.target.value)} value={list}>
                        {listname.map((list) => {
                          return (
                            <option value={list.id}>{list.name}</option>
                          );
                        })}
                      </Input>
                      <Button className=" my-4" color="secondary" type="submit">
                        Add
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </Modal>
          </div>
        </div>
      </>
    )
  }

}

export default Title

export const getServerSideProps: GetServerSideProps = async (context) => {


  const cookies = new Cookies(context.req.headers.cookie);
  const userid = parseInt(cookies.get('userid'));

  const userp = userid ? await prisma.user.findUnique({
    where: { id: userid }
  }) : '';

  const { titleid } = context.query
  const url = 'https://moviesdatabase.p.rapidapi.com/titles/' + titleid + '?info=base_info';
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

  const listname = await prisma.category.findMany();

  const urlcast = 'https://moviesdatabase.p.rapidapi.com/titles/' + titleid + '?info=extendedCast';
  const optionscast = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
  const responsecast = await fetch(urlcast, optionscast);
  const resultcast = await responsecast.json();

  const cast = resultcast.results.cast.edges;

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


  return { props: { titleInfo, titleid, listname, cast, genres, userp } };
}