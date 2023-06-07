
// Header.tsx
import React from 'react';
import Router from 'next/router';


export default function List({ listname }) {
    console.log(listname);
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
                <div className="tab-pane fade show active" id="watching-tab-pane" role="tabpanel" aria-labelledby="watching-tab" tabIndex={0}>viendo ahora</div>
                <div className="tab-pane fade" id="completed-tab-pane" role="tabpanel" aria-labelledby="completed-tab" tabIndex={0}>terminado</div>
                <div className="tab-pane fade" id="plantowatch-tab-pane" role="tabpanel" aria-labelledby="plantowatch-tab" tabIndex={0}>planear en ver</div>
                <div className="tab-pane fade" id="onhold-tab-pane" role="tabpanel" aria-labelledby="onhold-tab" tabIndex={0}>en espera</div>
                <div className="tab-pane fade" id="dropped-tab-pane" role="tabpanel" aria-labelledby="dropped-tab" tabIndex={0}>abandonado</div>
            </div>
        </>
    );
}
