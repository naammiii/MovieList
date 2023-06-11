
import Router from 'next/router';
import React, { useState } from "react";
import prisma from '../../lib/prisma';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/Home.module.css';
import { useEffect } from 'react';
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

const apiKey = process.env.API_KEY;

const Title = ({ titleInfo, titleid, listname }) => {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  const [modalFormOpen, setModalFormOpen] = React.useState(false);
  const [list, setList] = useState('');


  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(list);
    const categoryid = list;
    const body = { titleid, userid, categoryid };
    try{
      await fetch('/api/post/addListItem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      console.log('todo bien creo');

    }catch(err){
      console.log(err);
    }
  };

  if (userid == undefined) {
    return (
      <>
        <div className={styles.container}>
          <h1>Información de la película</h1>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Título de la película</h5>
              <p className="card-text" id="titulo">{titleInfo.titleText.text}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Género</h5>
              <p className="card-text" id="genero"></p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sinopsis</h5>
              <p className="card-text" id="sinopsis"></p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Año de lanzamiento</h5>
              <p className="card-text" id="lanzamiento"></p>
            </div>
          </div>
        </div>
      </>
    )

  } else {

    return (
      <>
        <div className={styles.container}>
          <h1>Información de la película</h1>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Título de la película</h5>
              <p className="card-text" id="titulo">{titleInfo.titleText.text}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Género</h5>
              <p className="card-text" id="genero"></p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sinopsis</h5>
              <p className="card-text" id="sinopsis"></p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Año de lanzamiento</h5>
              <p className="card-text" id="lanzamiento"></p>
            </div>
          </div>
          <Button
            block
            color="default"
            onClick={() => setModalFormOpen(true)}
            type="button"
          >
            ADD TO LIST
          </Button>
          <Modal isOpen={modalFormOpen} toggle={() => setModalFormOpen(false)}>
            <div className=" modal-body p-0">
              <Card className=" bg-primary shadow border-0">

                <CardBody className=" px-lg-5 py-lg-5">
                  <Form role="form" onSubmit={submitData}>
                    <Label for="exampleSelect">Select List</Label>
                    <Input type="select" name="select" id="exampleSelect" onChange={(e) => setList(e.target.value)} value={list}>
                      {listname.map((list) => {
                        return (
                          <option value={list.id}>{list.name}</option>
                        );
                      })}
                    </Input>
                    <Button className=" my-4" color="primary" type="submit">
                      Add
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Modal>
        </div>
      </>
    )
  }

}

export default Title

export async function getServerSideProps(context) {
  const { titleid } = context.query
  const url = 'https://moviesdatabase.p.rapidapi.com/titles/' + titleid;
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

  return { props: { titleInfo, titleid, listname } };
}