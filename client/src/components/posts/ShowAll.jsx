import "./styles/posts.css"
import {
  MoreVertRounded,
  QuestionAnswerSharp,
  CloseSharp,
  ArrowDownwardSharp,
} from "@material-ui/icons"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function ShowAll() {
  const [openOption, setOpenOption] = useState(null)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await axios.get("/posts")
        console.log(res.data)
        res.data && setPosts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPost()
  }, [])
  const PF = "http://localhost:8000"
  const deletePostHandler = () => {}
  return (
    <div className="posts col-12 m-auto mt-5">
      <h6 className="posts-title">Posts from Candidates</h6>
      <div className="posts-container">
        {/* ////////////////////////// */}
        {posts &&
          posts.map((post) => {
            return (
              <div className="post row" key={post._id}>
                <header className="header col-12">
                  <>
                    <div className="latest-posts-options ">
                      <MoreVertRounded
                        className="icon"
                        onClick={() => setOpenOption(post._id)}
                      />{" "}
                    </div>
                    {openOption === post._id && (
                      <div className="options-menu ">
                        <Link
                          className="link text-dark"
                          to={`edit/${post._id}`}
                        >
                          <li className="edit ">Edit</li>{" "}
                        </Link>
                        <li
                          className="del"
                          onClick={() => deletePostHandler(post._id)}
                        >
                          Delete
                        </li>
                        <CloseSharp
                          className="close-option-menu"
                          onClick={() => setOpenOption(null)}
                        />
                      </div>
                    )}{" "}
                  </>
                  <div className="post-auther col-12 row">
                    <img
                      className="col-4 author-photo"
                      src={PF + post?.photo}
                      alt="author"
                    />
                    <h6 className="col-8">{post?.userName}</h6>
                  </div>
                  <h6 className="post-title">{post?.title}</h6>
                </header>
                <div className="body col-12">
                  <p>
                    {post?.body.split(" ").slice(0, 20).join(" ")}
                    ...<a href="/">Read More</a>
                  </p>
                </div>
                <div className="info-and-actions col-12">
                  <span className="post-date">today</span>
                  <span className="comments">
                    <QuestionAnswerSharp />
                  </span>{" "}
                  <span>
                    <ArrowDownwardSharp className="me-3" />

                    <ArrowUpwardIcon />
                    {post?.likes?.length}
                  </span>
                </div>
              </div>
            )
          })}
        {/* ////////////////////////// */}
      </div>
    </div>
  )
}

export default ShowAll
