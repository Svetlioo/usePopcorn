import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
// import ExpandMenu from "./expandMenu";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating maxRating={10} onSetRatingHandler={setMovieRating} />
      <p>
        <strong style={{ fontSize: "22px" }}>
          This movie was rated {movieRating} stars
        </strong>
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
