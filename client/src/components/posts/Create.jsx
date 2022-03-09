import axios from "axios"
import { useState } from "react"
import "./styles/create.css"
import { useHistory } from "react-router-dom"
function Create() {
  const history = useHistory()
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [error, setError] = useState("")

  console.log({ body, title })
  const createPost = async (e) => {
    e.preventDefault()
    const config = {
      headers: {
        "Context-Type": "application/json",
      },
    }
    try {
      const res = await axios.post("/posts", { body, title }, config)
      res.data && history.push("/")
    } catch (error) {
      setError(error.response.data)
    }
  }
  return (
    <div className="container row create-post">
      <form className="create-form" onSubmit={createPost}>
        <h2 className="text-center text-success">New Post</h2>
        <label>Post Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          className="post-title"
        />
        {error && <div className="msg text-danger">{error}</div>}
        <label> Post Body</label>
        <textarea
          onChange={(e) => setBody(e.target.value)}
          type="text"
          name="title"
          className="post-body"
        />
        <button className="btn  btn-primary m-4">Post</button>
      </form>
    </div>
  )
}

export default Create
