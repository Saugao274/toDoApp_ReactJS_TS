import React, { useState } from "react";
import TaskList from "./components/TaskList";
import PLUS from "./img/plus.svg";
import "./App.scss";
import ModuleBox from "./components/ModuleBox";
export interface Istate {
  taskName: string;
  priority: Priority;
  progress: Progress;
  title: string;
  btn: string;
  tasks: ITask[];
  openBox: boolean;
  setOpenBox: React.Dispatch<React.SetStateAction<boolean>>;
  openBoxEdit: boolean;
  setOpenBoxEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setTaskName: React.Dispatch<React.SetStateAction<string>>;
  setPriority: React.Dispatch<React.SetStateAction<Priority>>;
  setProgress: React.Dispatch<React.SetStateAction<Priority | undefined>>;
}
export interface ITask {
  id: number;
  taskName: string;
  priority: Priority;
  progress: Progress;
}
export type Priority = "High" | "Medium" | "Low" | "";
export type Progress = "To do" | "In Progress" | "Done";
export default function App() {
  const [tasks, setTasks] = useState<Istate["tasks"]>([
    { id: 1, taskName: "go to gym", priority: "", progress: "To do" },
    { id: 2, taskName: "go o gym", priority: "", progress: "In Progress" },
  ]);
  const [idCurrent, setIdCurrent] = useState<number>(0);
  const [priority, setPriority] = useState<Istate["priority"]>("");
  const [progress, setProgress] = useState<Istate["progress"]>("To do");

  const [openBox, setOpenBox] = useState(false);

  const [title, setTitle] = useState("");
  const [taskName, setTaskName] = useState<string>("");
  const [btn, setBtn] = useState("");
  function onOpen() {
    setOpenBox(true);
    setTitle("Add Task");
    setTaskName("");
    setPriority("");
    setBtn("Add");
  }
  const handleEdit = (task: ITask) => {
    setOpenBox(true);
    setTitle("Edit Task");
    setTaskName(task.taskName || "");
    setPriority(task.priority || "");
    setProgress(task.progress || "To do");
    setBtn("Edit");
    setIdCurrent(task.id);
  };
  const handleTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };
  const handlePriority = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPriority(e.currentTarget.innerHTML as Priority);
  };

  const handleDelete = (taskId?: number) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };
  function checkID(id: number): boolean {
    return tasks.some((task) => task.id === id);
  }
  function randomID(idNumber: number): number {
    while (checkID(idNumber)) {
      idNumber = Math.floor(Math.random() * 100) + 1;
    }
    return idNumber;
  }
  const submitAdd = () => {
    const newTask: ITask = {
      taskName: taskName,
      priority: priority,
      progress: progress,
      id: -100,
    };
    updateId(newTask);
    setOpenBox(false);
  };
  const submitEdit = () => {
    const editedTask: ITask = {
      taskName: taskName,
      priority: priority,
      progress: progress,
      id: idCurrent,
    };
    updateId(editedTask);
    setOpenBox(false);
  };

  const updateId = (newTask: ITask) => {
    let updateTask = [...tasks];
    if (newTask.id !== -100) {
      updateTask[tasks.findIndex((task) => task.id === newTask.id)] = {
        taskName: newTask.taskName,
        priority: newTask.priority,
        progress: newTask.progress,
        id: newTask.id,
      };
    } else {
      const idNumber = randomID(Math.floor(Math.random() * 100) + 1);
      updateTask = [...tasks, { ...newTask, id: idNumber }];
    }
    setTasks(updateTask);
  };
  return (
    <div id="body">
      {openBox && (
        <ModuleBox
          title={title}
          taskName={taskName}
          priority={priority}
          btn={btn}
          openBox={openBox}
          setOpenBox={setOpenBox}
          handleTaskName={handleTaskName}
          handlePriority={handlePriority}
          submitAdd={submitAdd}
          submitEdit={submitEdit}
        />
      )}
      <div className="header">
        <h1 className="header__title">Task List</h1>
        <button className="header__btn" type="submit" onClick={onOpen}>
          <img src={PLUS} alt="plus" />
          <p>Add Task</p>
        </button>
      </div>

      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        progress={progress}
        title={"Add task"}
        taskName=""
        priority=""
        btn={"Add"}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
