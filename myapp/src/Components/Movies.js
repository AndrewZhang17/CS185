import React, {useState, useEffect} from 'react';
import { ids } from "../assets/movies.json"
import Grid from './Grid';
import Popup from "reactjs-popup";
import config from '../config';
const axios = require('axios');
const firebase = require('firebase')

function Movies(props) {
    const [movies, setMovies] = useState([]);
    const [list, setList] = useState("");
    const [page, setPage] = useState(0);
    const [newId, setNewId] = useState("");
    const [search, setSearch] = useState("");

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
        })

    }, [shouldRender])

    const addMovie = (evt) => {
        evt.preventDefault();

        axios({
            method: 'get',
            url: "https://www.omdbapi.com/?apikey=f23fd2c8&i=".concat(newId),
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
        setNewId("");
        setPage(0);
    }

    const getPage = () => {
        if (page === 0) {
            const movs = movies
                .filter(m => m.Title.toLowerCase().includes(search.toLowerCase()))
                .map(m =>
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
                    <div className="movies-menu">
                        <select className="movie-btn" onChange={e => setList(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Watched">Watched</option>
                            <option value="WannaWatch">WannaWatch</option>
                        </select>
                        <button className="movie-btn" onClick={() => setPage(1)}>
                            Add a Movie
                        </button>
                        <button className="movie-btn" onClick={() => setPage(2)}>
                            Create List
                        </button>
                        <input className="movie-search" type="text" placeholder="Search.." value={search} onChange={e => setSearch(e.target.value)}/>
                    </div>
                    <Grid items={movs}/>
                </div>
            );
        }
        else if (page === 1) {
            return (
                <div>
                    <h1>
                        Movies
                    </h1>
                    <div>
                        <button className="movie-btn" onClick={() => setPage(0)}>
                            Back
                        </button>
                    </div>
                    <form className="add-movie" onSubmit={addMovie}>
                        <h2>
                            Add a movie!
                        </h2>
                        <label>
                            Enter the IMDb ID of the movie you want to add:
                            <input type="text" value={newId} onChange={e => setNewId(e.target.value)}/>
                        </label>
                        <input type="submit" value="Add Movie" />
                    </form>
                </div>
            );
        }
        else if (page === 2) {
            return (
                <div>
                    <h1>
                        Movies
                    </h1>
                    <div>
                        <button className="movie-btn" onClick={() => setPage(0)}>
                            Back
                        </button>
                    </div>
                </div>
            );
        }
    }

    return getPage();
    

}

export default Movies;