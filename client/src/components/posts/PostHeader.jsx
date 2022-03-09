import { Link } from "react-router-dom"
import { MoreVertRounded, CloseSharp } from "@material-ui/icons"

function PostHeader({
  post,
  user,
  setOpenOption,
  openOption,
  deletePostHandler,
  PF,
}) {
  return (
    <header className="header col-12">
      {user?._id === post?.user && (
        <>
          <div className="latest-posts-options ">
            <MoreVertRounded
              className="icon"
              onClick={() => setOpenOption(post._id)}
            />{" "}
          </div>
          {openOption === post._id && (
            <div className="options-menu ">
              <Link className="link text-dark" to={`edit/${post._id}`}>
                <li className="edit ">Edit</li>{" "}
              </Link>
              <li className="del" onClick={() => deletePostHandler(post._id)}>
                Delete
              </li>
              <CloseSharp
                className="close-option-menu"
                onClick={() => setOpenOption(null)}
              />
            </div>
          )}{" "}
        </>
      )}

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
  )
}

export default PostHeader
