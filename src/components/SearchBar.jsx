import { useState } from "react"

export default function SearchBar() {
     const [search, setSearch] = useState('')
     const handleChange = (e) => {
       setSearch(e.target.value)
     }
     return (
      <div>
          <form>
            <input type="search" value={search} onChange={handleChange}/>
          </form>
      </div>
    )
  }

/* import React from "react"
import { useState } from "react"

const SearchBar = () => {
    const [input, setInput] = useState('')

    const fetchData  = (value) =>{
        fetch("https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-FT/posts").then((response) => response.json()).then((json) => {
            const results = json.filter((user) => {
                return user && user.name && user.name.toLowerCase().includes(value)
            })
            console.log
        })
        setResults(results)
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return(
        <div className="searchBar2"><form className="search">
            <input className="searchInput" type="text" id="search" value={input} onChange={e => handleChange(e.target.value)}
            />
            </form>
            </div>
    )
}

export default SearchBar */


/*     const [searchInput, setSearchInput] = useState("")
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if(!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(post => post.title.includes(e.target.value)) || post.body.includes(e.target.value)

        setSearchResults(results) */