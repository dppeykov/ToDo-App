import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      todoItems: [
        { action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect Tickets", done: true },
        { action: "Call Joe", done: false }
      ],
      newItemText: ""
    };
  }

  changeNameHandler = e => {
    return this.setState({ userName: e.target.value });
  };

  updateNewTextValue = event => {
    this.setState({ newItemText: event.target.value });
  };

  createNewTodo = () => {
    if (
      !this.state.todoItems.find(item => item.action === this.state.newItemText)
    ) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          { action: this.state.newItemText, done: false }
        ],
        newItemText: ""
      });
    }
  };

  render() {
    return (
      <div>
        <div className="container-fluid bg-primary text-white text-center text-sm-left p-2">
          <div className="row" style={{ margin: 0 }}>
            <div className="col-12 col-sm-7 col-md-8 col-lg-9 col-xl-10">
              <h4 className="ml-sm-3 ml-xl-5">
                {this.state.userName ? this.state.userName + "'s " : null} To Do
                List
              </h4>
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
        <div>
          <div className="container-fluid">
            <div className="my-1">
              <input
                className="form-control"
                value={this.state.newItemText}
                onChange={this.updateNewTextValue}
              />
              <button
                className="btn btn-primary mt-1"
                onClick={this.createNewTodo}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
