import React, { Component } from "react";
import axios from "axios";

class DetailFilms extends Component {
  state = {
    film: null,
    specie: [],
    character: []
  };

  getFilms() {
    let id = this.props.match.params.films_id;
    return axios.get("https://swapi.co/api/films/" + id).then(res => {
      this.setState({
        film: res.data
      });
      console.log(res)
    });
  }

  getSpecies() {
    let id = this.props.match.params.films_id;
    return axios.get("https://swapi.co/api/species/").then(res => {
      const movieSpecies = res.data.results.filter(s =>
        s.films.some(f => f.includes(`films/${id}/`))
      );
      this.setState({
        specie: movieSpecies
      });
    });
  }

  getCharacters() {
    let id = this.props.match.params.films_id;
    return axios.get("https://swapi.co/api/people/").then(res => {
      const movieCharacters = res.data.results.filter(c =>
        c.films.some(f => f.includes(`films/${id}/`))
      );
      this.setState({
        character: movieCharacters
      });
    });
  }

  componentDidMount() {
    this.getFilms();
    this.getSpecies();
    this.getCharacters();
  }
  render() {
    const film = this.state.film ? (
      <div className="jumbotron">
        <h2 className="display-4">{this.state.film.title}</h2>
        <p className="lead">{this.state.film.director}</p>
        <hr className="my-4" />
        <p>Producers: {this.state.film.producer}</p>
        <p>Episode Nº: {this.state.film.episode_id}</p>
        <p className="font-italic">{this.state.film.opening_crawl}</p>
        <p>Species: {this.state.specie.map(s => s.name).join(", ")}</p>
        <p>Characters: {this.state.character.map(
          c => c.name).join(", ")}
        </p>
      </div>
    ) : (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
    return (
      <div className="d-flex justify-content-center align-items-center ">
        {film}
      </div>
    );
  }
}

export default DetailFilms;
