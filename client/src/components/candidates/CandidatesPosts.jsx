import "./styles/posts.css";
import { QuestionAnswerSharp } from "@material-ui/icons";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

function CandidatesPosts() {
  return (
    <div className="posts col-12 m-auto mt-5">
      <h6 className="posts-title">Posts from Candidates</h6>
      <div className="posts-container">
        {/* ////////////////////////// */}
        <div className="post row">
          <div className="header col-12">
            <h6 className="post-title">Learn How to Code while working</h6>
            <div className="post auther">Ali Ahmed</div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit vel
              consequatur et voluptates? Dolores, praesentium consequatur
              voluptas quos eos eum. <a href="#">Read More</a>
            </p>
          </div>
          <div className="info-and-actions col-12">
            <span className="post-date">today</span>
            <span className="comments">
              <QuestionAnswerSharp />
            </span>
            <span>
              {" "}
              <ArrowUpwardIcon />
              440{" "}
            </span>
          </div>
        </div>
        {/* ////////////////////////// */}
        {/* ////////////////////////// */}
        <div className="post row">
          <div className="header col-12">
            <h6 className="post-title">Learn How to Code while working</h6>
            <div className="post auther">Ali Ahmed</div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit vel
              consequatur et voluptates? Dolores, praesentium consequatur
              voluptas quos eos eum. <a href="#">Read More</a>
            </p>
          </div>
          <div className="info-and-actions col-12">
            <span className="post-date">today</span>
            <span className="comments">
              <QuestionAnswerSharp />
            </span>
            <span>
              {" "}
              <ArrowUpwardIcon />
              440{" "}
            </span>
          </div>
        </div>
        {/* ////////////////////////// */}
        {/* ////////////////////////// */}
        <div className="post row">
          <div className="header col-12">
            <h6 className="post-title">Learn How to Code while working</h6>
            <div className="post auther">Ali Ahmed</div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit vel
              consequatur et voluptates? Dolores, praesentium consequatur
              voluptas quos eos eum. <a href="#">Read More</a>
            </p>
          </div>
          <div className="info-and-actions col-12">
            <span className="post-date">today</span>
            <span className="comments">
              <QuestionAnswerSharp />
            </span>
            <span>
              {" "}
              <ArrowUpwardIcon className="liks" />
              440{" "}
            </span>
          </div>
        </div>
        {/* ////////////////////////// */}
      </div>
    </div>
  );
}

export default CandidatesPosts;
