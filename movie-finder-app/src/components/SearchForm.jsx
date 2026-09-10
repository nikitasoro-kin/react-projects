const API_KEY = import.meta.env.VITE_API_KEY

function SearchForm() {

    return (
        <>
            <h2>Find a movie!</h2>

            <input 
                type="text" 
            />

            <button>Search</button>
        </>
    )
}

export default SearchForm;