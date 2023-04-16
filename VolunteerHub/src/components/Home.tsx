import { useState } from "react";
import { Link } from "react-router-dom";
import ThumbsUp from "bootstrap-icons/icons/hand-thumbs-up.svg";
import ThumbsUpFill from "bootstrap-icons/icons/hand-thumbs-up-fill.svg";
import "./Home.css";
import "./gridStyles.css";
import Grid from "./Grid";
import Post from "./Post";
const Home = () => {
  const [liked, setLiked] = useState(false);
  const posts = [
    { id: 1, content: "This is the first post" },
    { id: 2, content: "This is the second post" },
    { id: 3, content: "This is the third post" },
  ];

  return (
    <>
      <Grid>
        {posts.map((post) => (
          <Post key={post.id} id={post.id} content={post.content} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
