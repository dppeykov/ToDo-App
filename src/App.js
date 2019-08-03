import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      userName: "Damyan"
    };
  }

  changeNameHandler = e => console.log(e.target.value);

  render() {
    return (
      <div className="container-fluid bg-primary text-white text-center text-sm-left p-2">
        <div className="row" style={{ margin: 0 }}>
          <div className="col-12 col-sm-7 col-md-8 col-lg-9 col-xl-10">
            <h4 className="ml-sm-5">{this.state.userName}'s To Do List</h4>
          </div>
          <div className="col-12 col-sm-5 col-md-4 col-lg-3 col-xl-2">
            <input
              className="mx-auto input-group-text input-group-sm"
              style={{ width: "200px", margin: 0 }}
              placeholder="Fill your name here"
              onChange={this.changeNameHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}
