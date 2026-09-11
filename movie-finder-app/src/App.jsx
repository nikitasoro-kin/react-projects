import { useState } from 'react';
import SearchForm from './components/SearchForm';
import MovieCard from './components/MovieCard';
import Error from './components/Error';
import './App.css';

const API_KEY = import.meta.env.VITE_API_KEY

function App() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  const [movie, setMovie] = useState(null);

  const searchMovie = async () => {
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

          console.log(data);

          if (data) {
            setMovie(data);
          }
      } catch (error) {
          console.log(error);
      }
  }

  return (
    <>
      <SearchForm 
        onSearch={searchMovie}
        title={title}
        setTitle={setTitle}
        year={year}
        setYear={setYear}
      />

      {movie?.Response === 'True' ? 
        <MovieCard
          movie={movie}
        />
      
      :
        <Error
          message={movie?.Error}
        />
      }
    </>
  )
}

export default App
