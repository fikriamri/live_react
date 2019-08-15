import React from "react";
// import "./Header.css";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
// import Category from "./Category";
// import SearchField from "react-search-field";

function Movie(props) {
  return (
    <div class="card mb-3" style={{ maxWidth: 1000 }}>
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src={props.src}
            // class="card-img"
            alt="..."
            width="200px;"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">
              <small class="text-muted">{props.year}</small>
            </p>
            <p class="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
