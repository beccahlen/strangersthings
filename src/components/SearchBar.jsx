import React from "react"
import AllPosts from "./AllPosts"

const SearchBar = ({allPosts, setSearchResults}) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if(!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(post => post.title.includes(e.target.value)) || post.body.includes(e.target.value)

        setSearchResults(results)
    }

    return(
        <header><form className="search" onSubmit={handleSubmit}>
            <input className="searchInput" type="text" id="search" onChange={handleSearchChange}
            />
            <button className="searchButton">Click</button>
            </form>
            </header>
    )
}

export default SearchBar