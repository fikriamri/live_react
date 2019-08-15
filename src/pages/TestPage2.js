import React from "react";
// import "./Blog.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

import { actions } from "../store/store";
import { connect } from "unistore/react";
// import {store} from './Store'

// const apiKey = "06a3f3d6fe8b44d28a0b37c3b4e3efd6";
// const baseUrl = "https://newsapi.org/v2/everything?";

class TestPage1 extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.testpage2}</h1>
        {/* <Link >testpage3</Link> */}
      </div>
    );
  }
}

// export default Blog;
export default connect(
  "testpage1, testpage2, testpage3",
  actions
)(TestPage1);
