import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SearchBar from "./SearchBar"
import '../App.css'

function allPosts ({token}) {
    const [posts, setPosts] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [err, setError] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData(){
            try{
                const response = await fetch('https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-FT/posts')
                const posts = await response.json()

                setPosts(posts.data.posts)

            }
            catch(err) {
                console.log("Error fetching posts", err)
            }
        }
        fetchData()
    }, [])


    console.log(posts)

    return (<>
<div className="searchBar">Search posts here: <SearchBar/></div>

 {posts.map((p, index) =>
    <div key={index}
    className="posts"
    onClick={() => navigate(`/${p.id}`)}>
    <h2><u>{p.title}</u><br /><br />
    {p.description}<br /></h2>
    <h3>Username: {p.author.username}</h3>

   {/*  onclick function responsible for sending delete request
   conditionally render a delete button based off of 'isAuthor' */}
    
    </div> )}
    </>
    )


}


export default allPosts