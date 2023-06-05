import React from 'react';

export default function Menu({ genres }) {
  genres = genres.genres;
  console.log(genres);
  return (
    <div className="flex-shrink-0 p-3" style={{ width: '250px' }}>
      <a href="#" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
        <svg className="bi pe-none me-2" width="30" height="24"></svg>
        <span className="fs-5 fw-semibold">MENU</span>
      </a>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="true">
            Genres
          </button>
          <div className="collapse" id="account-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              {genres.map((genre) => {
                return (
                  <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">{genre.description}</a></li>
                )
              })}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}