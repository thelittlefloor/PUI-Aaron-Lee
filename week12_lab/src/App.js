import React, { Component } from "react";
import "./App.css";

const default_todoList = [
  {
    content: "Meet with Ken",
    finished: false
  },
  {
    content: "Go to the grocery store",
    finished: true
  },
  {
    content: "Run around Frick Park",
    finished: true
  },
  {
    content: "Remember to buy milk",
    finished: false
  },
  {
    content: "Finish My Final Project",
    finished: false
  }
];

//TODO 3: Change the default to-do list to your own personal items, including
// finish homework 8, take a nap, and enjoy lab!

class App extends Component {
  state = {
    todoList: default_todoList,
    newTodoContent: ""
  };
  toggleDone = (evt, i) => {
    console.log("done", i);
    let todoList = this.state.todoList;
    todoList[i].finished = !todoList[i].finished;
    this.setState({ todoList: todoList });
  };
  addItem = () => {
    //TODO 1: Make the add button work (hint: this.setState())
    // First, get a copy of the current todo-list using this.state
    // Next, push the new todo item to this array using the object notation defined above (content: ..., finished: ...)
    // Note that the new todo content is stored in the variable this.state.newTodoContent
    // Lastly, set the state of the todoList to this new array (this.setState({ todoList: ... }))

    var todoList = this.state.todoList;

    var newItem = {
      content: this.state.newTodoContent,
      finished: false
    };
    todoList.push(newItem);

    this.setState({ todoList: todoList });

    console.log("AddItem", this.state.newTodoContent);
  };
  deleteItem = (event, i) => {
    //TODO 2: Make the delete button work (hint: event.stopPropagation())
    // First, stop event propagation with event.stopPropagation
    // Next, create a new variable that has the content of the current array (this.state.todoList)
    // Next, delete i from the array using the splice method
    // Lastly, set the state of our application to use our new array:
    // (this.setState({ todoList: yourNewArray}))

    event.stopPropagation();
    var todoList = this.state.todoList;

    todoList.splice(i, 1);
    this.setState({ todoList: todoList });

    console.log("delete", i);
  };

  render() {
    console.log("rerender");
    let list_content = [];
    // This for loop creates a list of each of the items in our todo list
    // using HTML and JavaScript - this list is then rendered in the return call
    for (let i = 0; i < this.state.todoList.length; i++) {
      let todo = this.state.todoList[i];
      list_content.push(
        <li
          key={todo.content + "_" + i.toString()}
          onClick={(evt) => this.toggleDone(evt, i)}
        >
          {todo.content}
          {/* Comment: Below the "Done!" icon is conditionally rendered */}
          {todo.finished && <div className="DoneIcon">Done!</div>}
          <div className="Filler"></div>
          <div className="DeleteIcon" onClick={(e) => this.deleteItem(e, i)}>
            {"x"}
          </div>
        </li>
      );
      console.log(todo);
    }

    return (
      <div className="App">
        <div className="Header">
          <h2>Simple To Do</h2>
          <input
            type="text"
            value={this.state.newTodoContent}
            onChange={(evt) => {
              console.log(evt.target.value);
              this.setState({ newTodoContent: evt.target.value });
            }}
            placeholder="new to do...."
          />
          <span onClick={() => this.addItem()} className="AddNewToDoButton">
            Add
          </span>
        </div>
        <ul>{list_content}</ul>
      </div>
    );
  }
}

export default App;
