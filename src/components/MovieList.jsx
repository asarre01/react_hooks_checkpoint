import React from 'react'
import Movies from '../Movies'
import MovieCard from './MovieCard'

export default function MovieList() {
    return (
        <div className=' d-flex flex-wrap justify-content-center mt-4 px-4 '>
            {Movies.map((Movie, index) => (
                <div key={index}>
                    <MovieCard {...Movie} />
                </div>
            ))}
        </div>
    )
}
