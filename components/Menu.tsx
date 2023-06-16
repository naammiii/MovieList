import React from 'react';
import Router from 'next/router';

export default function Menu({ genres }) {

  return (
    <div className="flex-shrink-0 p-3" style={{ width: '250px' }}>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="true" style={{ backgroundColor: 'lightgrey', width: 'fit-content', fontFamily: 'courier, monospace', color: '#40babd', cursor: 'pointer' }}>
            Genres
          </button>
          <div className="collapse" id="account-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              {genres.map((genre) => {
                return (
                  <li><a onClick={() => Router.push('/category/' + genre)} style={{ cursor: 'pointer' }} className="link-dark d-inline-flex text-decoration-none rounded">{genre}</a></li>
                )
              })}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}