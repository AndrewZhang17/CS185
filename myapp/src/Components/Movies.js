import React, { Component } from 'react';
import { ids } from "../assets/movies.json"
import Grid from './Grid';
import Popup from "reactjs-popup";
const axios = require('axios');

class Movies extends Component {

    constructor(props) {
        super(props);
  
        this.state = {
          movies : []
        };
    }

    getMovies() {
        for(const id of ids) {
            axios({
                method: 'get',
                url: "https://www.omdbapi.com/?apikey=f23fd2c8&i=".concat(id),
            })
            .then(
                (response) => {
                    this.setState(state => {
                        return {movies: [...this.state.movies, response.data]};
                    })
                }
            )
        }
    }

    componentWillMount() {
        this.getMovies()
    }

    render() {
        const movies = this.state.movies.map(m =>
            <Popup className="popup" trigger={<img className="movie-item" alt={m.Title} src={m.Poster}/>} modal closeOnDocumentClick lockScroll postion="center center">
                <div className="movie-popup">
                    <img className="movie-poster" alt={m.Title} src={m.Poster}/>                        
                    <div className="movie-info">
                        <h1>{m.Title}</h1>
                        <div className="imdb-rating">IMDB Rating: {m.imdbRating}</div>
                        <p><b>Director:</b> {m.Director}</p>
                        <p><b>Released:</b> {m.Released}</p>
                        <p><b>Synopsis:</b> {m.Plot}</p>
                    </div>
                </div>
            </Popup>
        )
        return (
            <div>
                <h1>
                    Movies
                </h1>
                <Grid items={movies}/>
            </div>
        );
    }
}

export default Movies;