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
          src={
            post?.photo
              ? PF + post?.photo
              : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2FNo-profile-picture-102103301588246%2Fphotos%2F&psig=AOvVaw2qeAcFQwiwjq3QJda_ZY6E&ust=1647069452887000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIC2v4PCvfYCFQAAAAAdAAAAABAD"
          }
          alt="author"
        />
        <h6 className="col-8">{post?.userName}</h6>
      </div>
      <h6 className="post-title">{post?.title}</h6>
    </header>
  )
}

export default PostHeader
