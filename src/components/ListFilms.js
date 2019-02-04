import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

class ListFilms extends Component {
  render() {
    const films = this.props.films;
    return (
      <div className="row">
        {
          films.map((film, keys) => {
            return (
              <div className="col-sm-6 col-md-3 my-1" key={keys}>
                <div className="card">
                  <img width="100" src={`/img/episode${film.episode_id}.jpeg`} className="card-img-top" alt={film.title} />
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{film.title}</h5>
                    <p className="card-text"><small className="text-muted">{`Episode Nº: ${film.episode_id}`}</small></p>
                    <p className="card-text"><small className="text-muted">{`Relesade Date: ${film.release_date}`}</small></p>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="btn btn-warning">
                      {'Details '} <FontAwesomeIcon icon={faChevronCircleRight} />
                    </a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ListFilms;
