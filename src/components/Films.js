import React, { Component } from 'react';
import axios from 'axios';
import ListFilms from './ListFilms'

class Films extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
    }

    this.getFilms = this.getFilms.bind(this)
  }

  getFilms() {
    return axios.get('https://swapi.co/api/films')
      .then((res) => {
        const films = res.data.results;
        const keys = Object.keys(films)
        // console.log(keys)
        this.setState({
          films: res.data.results,
          keys: keys
        })
      })
  }

  reorderByDate = () => {
    // console.log(...films.release_date);
    var films = this.state.films.map(item => ({ ...item }));
    films.sort((a, b) =>
      a.release_date > b.release_date
        ? 1
        : b.release_date > a.release_date
        ? -1
        : 0
    );
    this.setState({ films });
  };

  reorderByEpisode = () => {
    //console.log(...films.episode_id);
    var films = this.state.films.map(item => ({ ...item }));
    films.sort((a, b) =>
      a.episode_id > b.episode_id ? 1 : b.episode_id > a.episode_id ? -1 : 0
    );
    this.setState({ films });
  };

  componentWillMount(){
    this.getFilms();
  }
  render() {
    const { films } = this.state;
    return(
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mb-2">
          <p className="mb-0 mr-2">Filter by:</p>
          <button onClick={this.reorderByDate} type="button" className="btn btn-warning btn-sm">Released Date</button>
          <p className="mb-0 mx-2">or:</p>
          <button onClick={this.reorderByEpisode} type="button" className="btn btn-warning btn-sm">Episode Number</button>
        </div>
        <ListFilms films={films} />
      </div>
    )
  }
};

export default Films;
