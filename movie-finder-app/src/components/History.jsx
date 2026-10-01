function History( {movieList, onMovieDelete, onItemDisplay} ) {

    return (
        <>
            <aside>
                <div className="history-container">
                    <h2>History</h2>

                    <ul>
                        {
                            movieList.map(movie => {
                                return (
                                    <li 
                                        key={movie.imdbID} 
                                        className="history-item"
                                    >
                                        <div onClick={() => onItemDisplay(movie)}>
                                            {movie.Title}
                                            <div className="item-discription">
                                                Director: {movie.Director}
                                            </div>
                                        </div>

                                        <button onClick={() => onMovieDelete(movie.imdbID)}>X</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </aside>
        </>
    )
}

export default History