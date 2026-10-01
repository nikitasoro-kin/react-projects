import { useEffect, useState } from 'react';
import SearchForm from './components/SearchForm';
import MovieCard from './components/MovieCard';
import Error from './components/Error';
import History from './components/History';
import './App.css';
import Loader from './components/Loader';

const API_KEY = import.meta.env.VITE_API_KEY

function App() {
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  const [movieList, setMovieList] = useState(() => {
    const savedMovies = localStorage.getItem("movies");

    if (savedMovies) {
      return JSON.parse(savedMovies);
    }

    return [];
  });

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movieList));
  }, [movieList])

  function deleteMovie(id) {
    setMovieList(movieList.filter(movie => {
      return movie.imdbID != id;
    }));
  }

  const searchMovie = async () => {
      setMovie(null);
      setLoading(true);
      let url = `http://www.omdbapi.com/?apikey=${API_KEY}`;

      if (title) {
          url += `&t=${title}`;
      }

      if (year) {
          url += `&y=${year}`;
      }

      try {
          const response = await fetch(url);
          const data = await response.json();

          if (data) {
            setMovie(data);

            if (data.Response === "True") {
              setMovieList(prev => [...prev, data]);
            }

            console.log(movieList);
          }
      } catch (error) {
          console.log(error);
      } finally {
          setLoading(false);
      }
  }

  function displayItem(movie) {
    setMovie(movie);
  }

  return (
    <div className='layout-container'>
      <History 
        movieList={movieList}
        onMovieDelete={deleteMovie}
        onItemDisplay={displayItem}
      />

      <div>
        <SearchForm 
          onSearch={searchMovie}
          title={title}
          setTitle={setTitle}
          year={year}
          setYear={setYear}
        />

        {loading && <Loader/>}
        {movie?.Response === 'True' ? 
          <MovieCard
            movie={movie}
          />
        
        :
          <Error
            message={movie?.Error}
          />
        }
      </div>

    </div>
  )
}

export default App
