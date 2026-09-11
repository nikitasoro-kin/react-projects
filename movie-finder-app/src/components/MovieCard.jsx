
function MovieCard( {movie} ) {

    return (
        <>
            <div className="card-container">
                <h2>{movie.Title}</h2>

                <div>
                    <p><span>Directed by: </span>{movie.Director}</p>
                    <p><span>Staring: </span>{movie.Actors}</p>
                    <p><span>Running time: </span>{movie.Runtime}</p>
                </div>

                <p className="card-year">{movie.Year}</p>
            </div> 
        </>
    )
}

export default MovieCard;