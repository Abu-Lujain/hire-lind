import { useState } from "react"
import "./styles/create.css"
import { axiosInstance } from "../../config/axiosInstance"
function Create() {
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
      const res = await axiosInstance.post("/posts", { body, title }, config)
      window.location.replace("/")
    } catch (error) {
      setError(error.response.data)
    }
  }
  return (
    <div className=" row create-post col-12 row">
      <form
        className="create-form col-md-7 m-auto col-12"
        onSubmit={createPost}
      >
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
