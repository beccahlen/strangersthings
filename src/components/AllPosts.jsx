import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import '../App.css'

function AllPosts () {
    const [allPosts, setAllPosts] = useState([])
    const [err, setError] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData(){
            try{
                const response = await fetch('https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-FT/posts')
                const posts = await response.json()

                setAllPosts(posts.data.posts)

            }
            catch(err) {
                console.log("Error fetching posts", err)
            }
        }
        fetchData()
    }, [])

    console.log(allPosts)

    return <>
 {allPosts.map((p, index) =>
    <div key={index}
    className="posts"
    onClick={() => navigate(`/${p.id}`)}>
    <h2><u>{p.title}</u><br /><br />
    {p.description}<br /></h2>
    <h3>Username: {p.author.username}</h3>
    </div> )}
    </>
}

export default AllPosts