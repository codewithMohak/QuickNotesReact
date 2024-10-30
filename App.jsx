import React from "react";
import seriesData from "./api/seriesData.json";

const App = () => {
  return (
    <ul>
      {seriesData.map((curElem) => {
        return (
          <li key={curElem.id}>
            <div>
              <div>
                <img
                  src={curElem.img_url}
                  alt={curElem.name}
                  width="40%"
                  height="40%"
                />
              </div>
              <h2>Name: {curElem.name}</h2>
              <h3>Rating: {curElem.rating}</h3>
              <p>Summary: {curElem.summary}</p>
              <p>Genre: {curElem.genre}</p>
              <p>Cast: {curElem.cast}</p>
              <a href={curElem.watch_url} target="_blank">
                <button>Watch Now</button>
              </a>
            </div>
          </li>
        );
      })}
      ;
    </ul>
  );
};

export default App;
