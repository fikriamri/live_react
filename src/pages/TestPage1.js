import React from "react";
// import "./Blog.css";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { actions } from "../store/store";
import { connect } from "unistore/react";
// import {store} from './Store'

// const apiKey = "06a3f3d6fe8b44d28a0b37c3b4e3efd6";
// const baseUrl = "https://newsapi.org/v2/everything?";

class TestPage1 extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       search: {
  //         placeHolder: "search...",
  //         keyword: "search..."
  //       }
  //     };
  //   }

  //   handleSearch = event => {
  //     this.setState({ search: { keyword: event.target.value } }, () => {
  //       this.getData(this.state.search.keyword);
  //     });
  //   };

  //   getData = keyword => {
  //     const self = this;

  //     // check apakah keyword kosong
  //     if (keyword === "") {
  //       axios
  //         .get(baseUrl + "q=indonesia" + "&apiKey=" + apiKey)
  //         .then(function(response) {
  //           self.props.setListNews(response.data.articles.slice(0, 5));
  //           console.log(response);
  //         })
  //         // Handle Error
  //         .catch(function(error) {
  //           console.log(error);
  //         });
  //     } else {
  //       axios
  //         .get(baseUrl + "q=" + keyword + "&apiKey=" + apiKey)
  //         .then(function(response) {
  //           self.props.setListNews(response.data.articles.slice(0, 5));
  //           console.log(response);
  //         })
  //         // Handle Error
  //         .catch(function(error) {
  //           console.log(error);
  //         });
  //     }
  //   };

  //   componentDidMount = () => {
  //     const self = this;
  //     axios
  //       .get(baseUrl + "q=indonesia" + "&apiKey=" + apiKey)
  //       .then(function(response) {
  //         // self.setState({ listNews: response.data.articles.slice(0, 5) });
  //         self.props.setListNews(response.data.articles.slice(0, 5));
  //         console.log(response);
  //         console.log(self.props.listNews);
  //       })
  //       // Handle Error
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //   };

  render() {
    return (
      <div>
        <h1>{this.props.testpage1}</h1>
        <Link to="/2">testpage2</Link>
      </div>
    );
  }
}

// export default Blog;
export default connect(
  "testpage1, testpage2, testpage3",
  actions
)(TestPage1);
