import { useState } from "react";
import LayoutAddMovie from "./components/LayoutAddMovie";
import MovieList from "./components/MovieList";
import NavBarCine from "./components/NavBarCine";
import Movies from "./Movies";

function App() {
	const [movies, setMovies] = useState(Movies);

	const [filter, setFilter] = useState({
		title: '',
		rating: null,
	});

	const handleFilterChange = (newFilter) => {
		// Update filter state when filter changes
		setFilter(newFilter);
	};

	return (
		<div className="App">
		<NavBarCine onFilterChange={handleFilterChange} movies={movies} />
		<MovieList movies={movies} filter={filter} />
		<LayoutAddMovie movies={movies} setMovies={setMovies} />
		</div>
	);
}

export default App;
