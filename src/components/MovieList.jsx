import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, filter }) => {
    const [filteredMovies, setFilteredMovies] = useState(movies);

    useEffect(() => {
        // Filter movies based on title and/or rating when filter changes
        const filtered = movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
            (!filter.rating || movie.rating >= filter.rating)
        );
        setFilteredMovies(filtered);
    }, [movies, filter]);

    return (
        <div className="movie-list d-flex flex-wrap ">
        {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
        ))}
        </div>
    );
};

export default MovieList;
