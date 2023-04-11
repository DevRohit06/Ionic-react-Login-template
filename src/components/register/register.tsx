import React from "react";
import { RouteComponentProps } from "react-router";
import axios from "axios";
import "../login/login.css";
import {useState, useEffect} from 'react';
import { Fragment, useRef,  } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
class Register extends React.Component<RouteComponentProps> {
    constructor (props) {
        super(props);
        this.prevent = this.prevent.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleFullName = this.handleFullName.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.state = {
            email: "",
            password: "",
            open: false,
            fullName: "",
        }
        }

        prevent(e){
            e.preventDefault();
        };

        handleEmail(e){
            this.setState({email: e.target.value});
        }
        handlePassword(e){
            this.setState({password: e.target.value});
        }
        handleFullName(e){
            this.setState({fullName: e.target.value});
        }
        handleRegister(){
            axios.post("http://localhost:2020/api/users/register", {
                email: this.state.email,
                password: this.state.password,
                fullname: this.state.fullName
            })
            .then((response) => {
                console.log("json response: ", response);
                if (response.status === 201) {
                    this.props.history.push("/login");
                  }
            })
            .catch((err) => {
                console.log(err);
                this.setState({open: true});
            });
        }
        render(){
            return(
                <>
                <section className="bg-image">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Flowbite    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={this.prevent}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input onChange={this.handleEmail} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input onChange={this.handlePassword} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div>
                      <label onChange={(e) => {
                        if(e.target.value !== this.state.password){
                            console.log("passwords do not match");
                        }
                      }} htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div>
                  <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                      <input onChange={this.handleFullName} type="text" name="Name" id="name" placeholder="Rohit Kushwaha" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" onClick={this.handleRegister} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <button onClick={
                        (e) => {
                            e.preventDefault();
                            this.props.history.push("/login");
                        }
                      } className="font-medium text-blue-600 hover:underline dark:text-primary-500">Login here</button>
                  </p>
               
              </form>
          </div>
      </div>
  </div>
</section>
                </>
            )
        }
}
export default Register;