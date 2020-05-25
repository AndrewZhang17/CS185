import React, {useState, useEffect} from 'react';
import { ids } from "../assets/movies.json"
import Grid from './Grid';
import Popup from "reactjs-popup";
import config from '../config';
const axios = require('axios');
const firebase = require('firebase')

function Movies(props) {
    const [movies, setMovies] = useState([]);
    const [lists, setLists] = useState({});
    const [movieLists, setMovieLists] = useState({});
    const [curList, setCurList] = useState("");
    const [page, setPage] = useState(0);
    const [newId, setNewId] = useState("");
    const [newList, setNewList] = useState("");
    const [search, setSearch] = useState("");

    const [shouldRender, setShowRender] = useState(true);

    useEffect(() => {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        let ref = firebase.database().ref('movies');

        ref.on('child_added', (childSnapshot, prevChildKey) => {
            const newChild = childSnapshot.val();
            setMovies(curMovies => [...curMovies, newChild]);
        });

        ref.on('child_removed', (childSnapshot) => {
            const deletedChild = childSnapshot.val();
            setMovies(curMovies => curMovies.filter(m => m.Title != deletedChild.Title));
        });

        let listRef = firebase.database().ref('lists');

        listRef.on('value', (dataSnapshot) => {
            const val = dataSnapshot.val();
            setLists(val);
        });

        let movieListsRef = firebase.database().ref('movieLists');

        movieListsRef.on('value', (dataSnapshot) => {
            const val = dataSnapshot.val();
            setMovieLists(val);
        });
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

    const deleteMovie = (id) => {
        firebase.database().ref('movies').child(id).remove();

        let updates = {};

        for (var list in movieLists[id]){
            updates["lists/" + list + "/" + id] = null;
        }
        updates["movieLists/" + id] = null;

        firebase.database().ref().update(updates);
    }

    const createList = (evt) => {
        evt.preventDefault();

        firebase.database().ref('lists').child(newList).set({
            title: newList
        });

        setNewList("");
        setPage(0);
    }

    const createPair = (id, list, target) => {
        let updates = {
            ["lists/" + list + "/" + id]: true,
            ["movieLists/" + id + "/" + list]: true
        }

        target.value = "";
        firebase.database().ref().update(updates);
    }

    const getPage = () => {
        if (page === 0) {
            const movs = movies
                .filter(m => curList === "" || lists[curList][m.imdbID] === true)
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
                            <button className="delete-movie" onClick={() => deleteMovie(m.imdbID)}>
                                Delete
                            </button>
                            <select className="movie-btn" onChange={e => createPair(m.imdbID, e.target.value, e.target)}>
                                <option value="" disabled selected>Add to list:</option>
                                {Object.keys(lists)
                                    .filter(l => (
                                        lists[l][m.imdbID] != true
                                    ))
                                    .map(l => (
                                        <option value={l}>{l}</option>
                                    ))
                                }
                            </select>
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
                        <select className="movie-btn" onChange={e => setCurList(e.target.value)}>
                            <option value="">All</option>
                            {Object.keys(lists).map(l => (
                                <option value={l}>{l}</option>
                            ))}
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
                    <form className="add-movie" onSubmit={createList}>
                        <h2>
                            Create a new list!
                        </h2>
                        <label>
                            Enter the name of the list you want to create:
                            <input type="text" value={newList} onChange={e => setNewList(e.target.value)}/>
                        </label>
                        <input type="submit" value="Create List" />
                    </form>
                </div>
            );
        }
    }

    console.log(lists);
    return getPage();
    

}

export default Movies;