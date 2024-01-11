import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Nodata from './Nodata';

const MovieList = ({ movies, filter }) => {
    const [filteredMovies, setFilteredMovies] = useState(movies);

    useEffect(() => {
        const filtered = movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
            (!filter.rating || movie.rating >= filter.rating)
        );
        setFilteredMovies(filtered);
    }, [movies, filter]);

    let isEmpty = false;
    
    if (filteredMovies.length !== 0) {
        isEmpty = true;
    }
    return (
        <div style={{ minHeight: '47rem' }} className=" d-flex flex-wrap ">
        { isEmpty ? filteredMovies.map((movie) => (<MovieCard key={movie.id} {...movie} />)) : <Nodata/>}
        </div>
    );
};

export default MovieList;
