import React from "react";
import TaskList from "./components/TaskList";
import PLUS from "./img/plus.svg";
import "./App.scss";
import ModuleBox from "./components/ModuleBox";

export default function App() {
  return (
    <div className="body">
      {/* <ModuleBox /> */}
      <div className="header">
        <h1 className="header__title">Task List</h1>
        <button className="header__btn" type="submit">
          <img src={PLUS} alt="plus" />
          <p>Add Task</p>
        </button>
      </div>
      <TaskList />
    </div>
  );
}
