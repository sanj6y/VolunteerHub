import { useState } from "react";
import ThumbsUp from "bootstrap-icons/icons/hand-thumbs-up.svg";
import ThumbsUpFill from "bootstrap-icons/icons/hand-thumbs-up-fill.svg";

interface PostProps {
  id: number;
  content: string;
}

const Post: React.FC<PostProps> = ({ id, content }) => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{content}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>

        {liked ? (
          <img
            src={ThumbsUpFill}
            alt="Filled Thumbs Up"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <img
            src={ThumbsUp}
            alt="Thumbs Up"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
    </div>
  );
};

export default Post;
