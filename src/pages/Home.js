import React from "react";
import "../styles/Home.css";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { actions } from "../store/store";
import { connect } from "unistore/react";
import Header from "../component/Header";
import HomeMovie from "../component/HomeMovie";
import Movie from "../component/Movie";
// import {store} from './Store'

const baseUrl = "https://api-todofancy.herokuapp.com/api/movies";

class Home extends React.Component {
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      const self = this;
      self.props.listMovieByCategory(
        self.props.listMovie.filter(
          movie => movie.category === self.props.match.params.category
        )
      );

      console.log(self.props.listMovieByCategory);
    }
  };
  componentDidMount = () => {
    const self = this;
    axios
      .get(baseUrl)
      .then(function(response) {
        self.props.setListMovie(response.data.movies);
        // self.setState({ listNews: response.data.articles });
        console.log(response);
        console.log(self.props.listMovie);
      })
      // Handle Error
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row justify-content-center text-center">
            <HomeMovie
              src="https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
              width={"95%"}
              category="Romance"
            />
            <HomeMovie
              src="https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
              width={"95%"}
              category="Action"
            />
            <HomeMovie
              src="https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg"
              width={"95%"}
              category="Fiction"
            />
            <HomeMovie
              src="https://m.media-amazon.com/images/M/MV5BNTAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
              width={"95%"}
              category="Comedy    "
            />
          </div>
        </div>
      </div>
    );
  }
}

// export default Home;
export default connect(
  "listMovie, listMovieByCategory",
  actions
)(Home);
