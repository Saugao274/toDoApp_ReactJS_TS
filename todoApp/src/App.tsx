import React, { useState } from "react";
import TaskList from "./components/TaskList";
import PLUS from "./img/plus.svg";
import "./App.scss";
import ModuleBox from "./components/ModuleBox";
export interface Istate {
  title: string;
  taskName: string;
  priority: Priority;
  btn: string;
  tasks: {
    id: number;
    taskName: string;
    priority: string;
    progress: Progress;
  }[];
}
type Priority = "High" | "Medium" | "Low" | "";
type Progress =
  | { progressValue: "To do"; progressImg: "todo" }
  | { progressValue: "In Progress"; progressImg: "progress" }
  | { progressValue: "Done"; progressImg: "done" };
export default function App() {
  const [tasks, setTasks] = useState<Istate["tasks"]>([]);
  const [priority, setPriority] = useState<Istate["priority"]>("");
  const [title, setTitle] = useState<Istate["title"]>("Add Task");

  return (
    <div className="body">
      <ModuleBox title={title} taskName="" priority="" btn={"Add"} />
      <ModuleBox
        title={"Edit Task"}
        taskName={"go to gym"}
        priority=""
        btn={"Edit"}
      />

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
