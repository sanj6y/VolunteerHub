import { useState } from "react";
import { Link } from "react-router-dom";
import ThumbsUp from "bootstrap-icons/icons/hand-thumbs-up.svg";
import ThumbsUpFill from "bootstrap-icons/icons/hand-thumbs-up-fill.svg";
import "./Home.css";
import "./gridStyles.css";
import Grid from "./Grid";

const Home = () => {
  const [liked, setLiked] = useState(false);
  const cardsData = [
    { id: 1, title: "Card 1", content: "Content 1" },
    // ... add more card data as needed
  ];
  const handleClick = () => {
    setLiked(!liked);
  };
  return (
    <>
      <Grid>
        {cardsData.map((card) => (
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.content}</p>
              <div className="liked-button-container">
                {liked ? (
                  <img
                    className="liked-button"
                    src={ThumbsUpFill}
                    alt="Filled Thumbs Up"
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <img
                    className="liked-button"
                    src={ThumbsUp}
                    alt="Thumbs Up"
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </Grid>
    </>
  );
};

export default Home;
