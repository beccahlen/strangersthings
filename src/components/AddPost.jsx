import { useState } from "react"

function NewPost (){
        const [title, setTitle] = useState('')
        const [description, setDescription] = useState('')
        const [message, setMessage] = useState('')

        let handleSubmit = async (e) => {
            e.preventDefault();
            try {
              let res = await fetch("https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-FT/posts", {
                method: "POST",
                body: JSON.stringify({
                  title: title,
                  description: description,
                }),
              });
              let resJson = await res.json();
              if (res.status === 200) {
                setTitle("");
                setDescription("");
              } else {
                setMessage("Some error occured");
              }
            } catch (err) {
              console.log(err);
            }
          };
    
          console.log(title, description)
          
            return (
                <div className="Form">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      value={title}
                      placeholder="Title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                      type="text"
                      value={description}
                      placeholder="Description"
                      onChange={(e) => setDescription(e.target.value)}
                    />

                    <button type="submit">Create</button>
            
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                  </form>
                </div>
        )
    }

export default NewPost