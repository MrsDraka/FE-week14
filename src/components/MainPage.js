import React from "react";
import MovieList from "./MovieList";

//Main file the has the container that gets loaded on the page

export default class MainPage extends React.Component {
  render() {
    const containerStyle = {
      backgroundColor: "#212529",
    };

    return (
      <div style={containerStyle}>
        <div className="container">
          <h1 className="App-title pt-5">
            {" "}
            {/* Added an icon to the pages title */}
            <img
              src="\images\iconpopcorn.svg"
              alt="reel"
              style={{ width: "70px", padding: "5px" }}
              className="img-fluid"
            ></img>
            {/*page title */}
            Popcorn Picks
          </h1>
          {/* Calls the MovieList component */}
          <MovieList />
        </div>
      </div>
    );
  }
}
