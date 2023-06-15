
// Header.tsx
import React, { useState } from "react";
import Router from 'next/router';
import Image from "next/image";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const userid: number = cookies.get('userid');

import {
    Button,
    Card,
    CardBody,
    Form,
    Input,
    Modal,
    Label,
} from "reactstrap";

export default function List({ listname, userP, isUser }) {

    const [modalFormOpen, setModalFormOpen] = React.useState(false);
    const [list, setList] = useState('');
    const [title, setTitle] = useState('');

    var watching, completed, plantowatch, onhold, dropped = false

    if (userP[1]) watching = true;
    if (userP[2]) completed = true;
    if (userP[3]) plantowatch = true;
    if (userP[4]) onhold = true;
    if (userP[5]) dropped = true;

    for (let i = 0; i < listname.length; i++) {
        const element = listname[i];
        if (!element.primaryImage) listname[i].primaryImage = { url: '/images/404PosterNotFound.jpg' }
    }

    async function delList(titleid, userid) {
        const body = { titleid, userid };
        try {
            await fetch('/api/post/deleteList', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            console.log(titleid + ' - ' + userid);
            Router.reload();

        } catch (err) {
            console.log(err);
        }
    }

    const submitData = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const categoryid = list;
        const titleid = title;
        const body = { titleid, userid, categoryid };
        try {
            await fetch('/api/post/editList', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            Router.reload();

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="watching-tab" data-bs-toggle="tab" data-bs-target="#watching-tab-pane" type="button" role="tab" aria-controls="watching-tab-pane" aria-selected="true">{listname[0].name}</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="completed-tab" data-bs-toggle="tab" data-bs-target="#completed-tab-pane" type="button" role="tab" aria-controls="completed-tab-pane" aria-selected="false">{listname[1].name}</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="plantowatch-tab" data-bs-toggle="tab" data-bs-target="#plantowatch-tab-pane" type="button" role="tab" aria-controls="plantowatch-tab-pane" aria-selected="false">{listname[2].name}</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="onhold-tab" data-bs-toggle="tab" data-bs-target="#onhold-tab-pane" type="button" role="tab" aria-controls="onhold-tab-pane" aria-selected="false">{listname[3].name}</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="dropped-tab" data-bs-toggle="tab" data-bs-target="#dropped-tab-pane" type="button" role="tab" aria-controls="dropped-tab-pane" aria-selected="false">{listname[4].name}</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="watching-tab-pane" role="tabpanel" aria-labelledby="watching-tab" tabIndex={0}>

                    <table className="table align-middle mb-0 bg-white">
                        <thead className="bg-light">
                            <tr>
                                <th>Name</th>
                                {isUser ? <th>Actions</th> : null}
                            </tr>
                        </thead>
                        {watching ? (userP[listname[0].id].map((entry) => {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <Image className="rounded-circle" src={entry.primaryImage.url} height={45} width={45} alt='asw' />
                                                    <div className="ms-3">
                                                        <a className="fw-bold mb-1" style={{ cursor: 'pointer' }} onClick={() => Router.push('/title/' + entry.id)}>{entry.originalTitleText.text}</a>
                                                    </div>
                                                </div>
                                            </td>
                                            {isUser ?
                                                <td>
                                                    <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => { setTitle(entry.id), setModalFormOpen(true) }}>
                                                        Edit
                                                    </button>
                                                    <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => delList(entry.id, userid)}>
                                                        Delete
                                                    </button>
                                                </td> : null}
                                        </tr>

                                    </tbody>
                                </>
                            );
                        })) : ('No items found for this list')}

                    </table>
                </div>
                <div className="tab-pane fade" id="completed-tab-pane" role="tabpanel" aria-labelledby="completed-tab" tabIndex={0}>

                    <table className="table align-middle mb-0 bg-white">
                        <thead className="bg-light">
                            <tr>
                                <th>Name</th>
                                {isUser ? <th>Actions</th> : null}
                            </tr>
                        </thead>
                        {completed ? (userP[listname[1].id].map((entry) => {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <Image className="rounded-circle" src={entry.primaryImage.url} height={45} width={45} alt='asw' />
                                                    <div className="ms-3">
                                                        <a className="fw-bold mb-1" style={{ cursor: 'pointer' }} onClick={() => Router.push('/title/' + entry.id)}>{entry.originalTitleText.text}</a>
                                                    </div>
                                                </div>
                                            </td>
                                            {isUser ?
                                                <td>
                                                    <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => { setTitle(entry.id), setModalFormOpen(true) }}>
                                                        Edit
                                                    </button>
                                                    <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => delList(entry.id, userid)}>
                                                        Delete
                                                    </button>
                                                </td> : null}
                                        </tr>

                                    </tbody>
                                </>
                            );
                        })) : ('No items found for this list')}
                    </table>
                </div>
                <div className="tab-pane fade" id="plantowatch-tab-pane" role="tabpanel" aria-labelledby="plantowatch-tab" tabIndex={0}>

                    <table className="table align-middle mb-0 bg-white">
                        <thead className="bg-light">
                            <tr>
                                <th>Name</th>
                                {isUser ? <th>Actions</th> : null}
                            </tr>
                        </thead>
                        {plantowatch ? (userP[listname[2].id].map((entry) => {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <Image className="rounded-circle" src={entry.primaryImage.url} height={45} width={45} alt='asw' />
                                                    <div className="ms-3">
                                                        <a className="fw-bold mb-1" style={{ cursor: 'pointer' }} onClick={() => Router.push('/title/' + entry.id)}>{entry.originalTitleText.text}</a>
                                                    </div>
                                                </div>
                                            </td>
                                            {isUser ?
                                                <td>
                                                    <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => { setTitle(entry.id), setModalFormOpen(true) }}>
                                                        Edit
                                                    </button>
                                                    <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => delList(entry.id, userid)}>
                                                        Delete
                                                    </button>
                                                </td> : null}
                                        </tr>

                                    </tbody>
                                </>
                            );
                        })) : ('No items found for this list')}
                    </table>
                </div>
                <div className="tab-pane fade" id="onhold-tab-pane" role="tabpanel" aria-labelledby="onhold-tab" tabIndex={0}>
                    <table className="table align-middle mb-0 bg-white">
                        <thead className="bg-light">
                            <tr>
                                <th>Name</th>
                                {isUser ? <th>Actions</th> : null}
                            </tr>
                        </thead>
                        {onhold ? (userP[listname[3].id].map((entry) => {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <Image className="rounded-circle" src={entry.primaryImage.url} height={45} width={45} alt='asw' />
                                                    <div className="ms-3">
                                                        <a className="fw-bold mb-1" style={{ cursor: 'pointer' }} onClick={() => Router.push('/title/' + entry.id)}>{entry.originalTitleText.text}</a>
                                                    </div>
                                                </div>
                                            </td>
                                            {isUser ?
                                                <td>
                                                    <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => { setTitle(entry.id), setModalFormOpen(true) }}>
                                                        Edit
                                                    </button>
                                                    <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => delList(entry.id, userid)}>
                                                        Delete
                                                    </button>
                                                </td> : null}
                                        </tr>

                                    </tbody>
                                </>
                            );
                        })) : ('No items found for this list')}
                    </table>
                </div>
                <div className="tab-pane fade" id="dropped-tab-pane" role="tabpanel" aria-labelledby="dropped-tab" tabIndex={0}>
                    <table className="table align-middle mb-0 bg-white">

                        <thead className="bg-light">
                            <tr>
                                <th>Name</th>
                                {isUser ? <th>Actions</th> : null}
                            </tr>
                        </thead>
                        {dropped ? (userP[listname[4].id].map((entry) => {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">

                                                    <Image className="rounded-circle" src={entry.primaryImage.url} height={45} width={45} alt='asw' />
                                                    <div className="ms-3">
                                                        <a className="fw-bold mb-1" style={{ cursor: 'pointer' }} onClick={() => Router.push('/title/' + entry.id)}>{entry.originalTitleText.text}</a>
                                                    </div>
                                                </div>
                                            </td>
                                            {isUser ?
                                                <td>
                                                    <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => { setTitle(entry.id), setModalFormOpen(true) }}>
                                                        Edit
                                                    </button>
                                                    <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => delList(entry.id, userid)}>
                                                        Delete
                                                    </button>
                                                </td> : null}
                                        </tr>

                                    </tbody>
                                </>
                            );
                        })) : ('No items found for this list')}
                    </table>
                </div>
                <Modal isOpen={modalFormOpen} toggle={() => setModalFormOpen(false)}>
                    <div className=" modal-body p-0">
                        <Card className=" bg-primary shadow border-0">

                            <CardBody className=" px-lg-5 py-lg-5">
                                <Form role="form" onSubmit={submitData}>
                                    <Label for="exampleSelect">Select List</Label>
                                    <Input type="select" name="select" id="exampleSelect" onChange={(e) => setList(e.target.value)} value={list}>
                                        <option selected>Select List</option>
                                        {listname.map((list) => {
                                            return (
                                                <option value={list.id}>{list.name}</option>
                                            );
                                        })}
                                    </Input>
                                    <Button className=" my-4" color="primary" type="submit">
                                        Change
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </Modal>
            </div>

        </>
    );
}
