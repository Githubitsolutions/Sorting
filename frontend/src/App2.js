import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import ViewTodo from "./components/view-todo.component";
import TodosList from "./components/todos-list.component";
import DeleteTodo from "./components/delete-todo.component";
import logo from "./logo512.png";
import { html2Pdf } from "./helpers/helpers";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a
              className="navbar-brand"
              href="https://www.google.com"
              target="_blank"
            >
            <button

                onClick={() => html2Pdf(["pdf", "pdf1"])}
              > pdf</button>
              <img src={logo} width="30" height="30" alt="Demo Logo" />
            </a>
            <Link to="/" className="navbar-brand">
              MERN-Stack Todo App
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/create" className="nav-link">
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
            <Route path="/view/:id" component={ViewTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/delete/:id" component={DeleteTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
