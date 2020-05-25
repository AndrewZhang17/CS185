import React, {useState, useEffect} from 'react';
import { ids } from "../assets/movies.json"
import Grid from './Grid';
import Popup from "reactjs-popup";
import config from '../config';
const axios = require('axios');
const firebase = require('firebase')

function Movies(props) {
    const [movies, setMovies] = useState([]);
    const [shouldRender, setShowRender] = useState(true);

    useEffect(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        //get a reference to the database
        let ref = firebase.database().ref('movies');
        var loaded = false;

        ref.on('child_added', (childSnapshot, prevChildKey) => {
            //this is your call back function
            //state will be a JSON object after this
            //set your apps state to contain this data however you like
            const newChild = childSnapshot.val();
            //i have previously declared a state variable like this: const [data, setData] = useState([]) so that I can make the below call
            setMovies(curMovies => [...curMovies, newChild])
            console.log(newChild.id);
        })

    }, [shouldRender])

    const getMovies = () => {
        for(const id of ids) {
            axios({
                method: 'get',
                url: "https://www.omdbapi.com/?apikey=f23fd2c8&i=".concat(id),
            })
            .then(
                (response) => {
                    firebase.database().ref('movies').child(response.data.imdbID).set({
                        imdbID: response.data.imdbID,
                        Title: response.data.Title,
                        Poster: response.data.Poster,
                        imdbRating: response.data.imdbRating,
                        Director: response.data.Director,
                        Released: response.data.Released,
                        Plot: response.data.Plot
                    });
                }
            )
        }
    }

    const movs = movies.map(m =>
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
            <Grid items={movs}/>
        </div>
    );

}

export default Movies;