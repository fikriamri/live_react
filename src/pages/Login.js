import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import LoginForm from "../component/LoginForm";
// import "./Login.css";
import { connect } from "unistore/react";
import { store, actions } from "../store/store";
// import {actions} from

const loginHost = "https://kabarkabur.free.beeceptor.com/login";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: { username: "", password: "" }
    };
  }
  componentDidMount() {
    this.renderRedirect();
  }

  handleLoginUsernameChange = event => {
    this.setState({ login: { username: event.target.value } });
  };

  handleLoginPasswordChange = event => {
    this.setState({ login: { password: event.target.value } });
  };
  handleLoginSubmit = event => {
    let data = {
      name: this.state.login.username,
      password: this.state.login.password
    };
    this.postLogin(data);
    event.preventDefault();
  };

  postLogin = data => {
    const self = this;
    axios.post(loginHost, data).then(function(response) {
      console.log(response);
      // localStorage.setItem("nama", response.data.nama);
      // localStorage.setItem("email", response.data.email);
      // localStorage.setItem("isLogin", 1);
      self.props.setNama(response.data.nama);
      self.props.setEmail(response.data.email);
      self.props.setLogin(response.data.isLogin);
      console.log(response);
      console.log(self.props.nama);
      console.log(self.props.email);
      console.log(self.props.isLogin);
      self.props.history.push("/");
      // bisa juga self.props.history.replace(path yang ingin dituju, contoh "/profile")
    });
  };

  renderRedirect = () => {
    // const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    // const isLogin = this.props.isLogin;
    // console.log(this.props.isLogin);
    if (this.props.isLogin === true) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div className="login">
        {this.renderRedirect()}
        <LoginForm
          onUsernameChange={this.handleLoginUsernameChange}
          onPasswordChange={this.handleLoginPasswordChange}
          onSubmit={this.handleLoginSubmit}
          data={this.state.login}
        />
      </div>
    );
  }
}

// export default Login;
export default connect(
  "login, nama, email, isLogin",
  actions
)(Login);
