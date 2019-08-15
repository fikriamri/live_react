import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import { connect } from "unistore/react";
import { actions } from "../store/store";
import Movie from "../component/Movie";
import Header from "../component/Header";

const baseUrl = "https://api-todofancy.herokuapp.com/api/movies";

class MovieByCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovieByCategory: []
    };
  }

  componentWillMount = () => {
    const self = this;
    axios
      .get(baseUrl)
      .then(function(response) {
        self.props.setListMovie(response.data.movies);
        // self.setState({ listNews: response.data.articles });
        console.log(response);
        console.log(self.props.listMovieByCategory);
        console.log(self.props.match.params.category);
      })
      // Handle Error
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    // if (this.props.isLogin === null) {
    //   return <Redirect to={{ pathname: "/signin" }} />;
    // } else {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row justify-content-center text-center">
            {this.props.listMovie
              .filter(
                movie => movie.Category === this.props.match.params.category
              )
              .map(movie => {
                return (
                  <Movie
                    title={movie.Title}
                    description={movie.Synopsis}
                    year={movie.Year}
                    src={movie.Poster}
                  />
                );
              })}
            {console.log(this.props.listMovie)}
          </div>
        </div>
      </div>
    );
  }
}

// }

// export default BlogByCategory;
export default connect(
  "listMovie, listMovieByCategory",
  actions
)(MovieByCategory);
