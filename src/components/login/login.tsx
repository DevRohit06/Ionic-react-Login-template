import React from "react";
import "./login.css";
import { RouteComponentProps } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { IonToast } from "@ionic/react";
import { IonRouterLink } from "@ionic/react";
class Login extends React.Component<RouteComponentProps> {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);

    this.handleUsername = this.handleUsername.bind(this);

    this.handlePassword = this.handlePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      open: false,
      user: ""
    };
  }
  prevent(e) {
    e.preventDefault();
  }
  handleUsername(e) {
    this.setState({ email: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleLogin() {
    axios.post("http://localhost:2020/api/users/login", {
        email: this.state.email,
        password: this.state.password,
    })
      .then((response) => {
        console.log("json response: ", response);
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
        if (response.status === 200) {
            this.setState({ user: response.data });
          this.props.history.push("/tab2");
        }
      })

      .catch((err) => {
        console.log(err);
        this.setState({ open: true });
      });
  }
  render() {
    if(!this.state.user){
    return (
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-16 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-3xl font-bold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Classes
          </a>
          <div className="mt-14 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Get Access to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={this.prevent}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Student ID
                  </label>
                  <input
                    onChange={this.handleUsername}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Rohit@12A"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={this.handlePassword}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={this.handleLogin}
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Join Now!
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don't have an account? <a onClick={
                        (e) => {
                          e.preventDefault();
                          this.props.history.push("/register");
                        }
                      } className="font-medium text-primary-600 hover:underline dark:text-primary-500">Create Now</a>
                      </p>
                <IonToast
                  isOpen={this.state.open}
                  message="The Login details are incorrect. Please try again."
                  onDidDismiss={() => this.setState({ open: false })}
                  duration={5000}
                ></IonToast>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    this.props.history.push("/tab2");
  }
} 
}

export default Login;
