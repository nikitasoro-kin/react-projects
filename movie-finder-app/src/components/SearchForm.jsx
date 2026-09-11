import { useState } from "react"

function SearchForm( {onSearch, title, setTitle, year, setYear} ) {

    return (
        <>
            <div className="form-container">
                <h2>Find a movie!</h2>

                <div>
                    <p>Name:</p>
                    <input 
                        type="text"
                        value={title}
                        onChange={e => {
                            setTitle(e.target.value)
                        }}
                    />
                </div>

                <div>
                    <p>Year:</p>
                    <input 
                        type="text" 
                        value={year}
                        onChange={e => {
                            setYear(e.target.value)
                        }}
                    />
                </div>

                <button onClick={onSearch}>Search</button>
            </div>
        </>
    )
}

export default SearchForm;