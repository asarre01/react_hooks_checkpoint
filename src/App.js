import LayoutAddMovie from "./components/LayoutAddMovie";

import MovieList from "./components/MovieList";
import NavBarCine from "./components/NavBarCine";

function App() {
	return (
		<div className="App">
			<NavBarCine/>
			<MovieList/>
			<LayoutAddMovie/>
		</div>
	);
}

export default App;
