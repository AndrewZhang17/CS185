import React, { Component } from 'react';
import { ids } from "../assets/movies.json"
const axios = require('axios');

class Movies extends Component {

    constructor(props) {
        super(props);
  
        this.state = {
          movies : []
        };
    }

    getMovies() {
        console.log(ids)
        for(const id of ids) {
            axios({
                method: 'get',
                url: "http://www.omdbapi.com/?apikey=f23fd2c8&i=".concat(id),
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
        console.log(this.state.movies)
        return (
            this.state.movies.map(m => (
                <h1>{m.Title}</h1>
            ))
        );
    }
}

export default Movies;