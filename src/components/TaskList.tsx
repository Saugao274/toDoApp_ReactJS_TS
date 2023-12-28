import React from "react";
import EDIT from "../img/edit.svg";
import DELETE from "../img/delete.svg";
import "../css/TaskList.scss";
import { Istate as Props } from "../App";
import { Progress } from "../App";
import { Priority } from "../App";
interface IProps {
  tasks: Props["tasks"];
  progress: Progress;
  setTasks: React.Dispatch<React.SetStateAction<Props["tasks"]>>;
  title: Props["title"];
  taskName: Props["taskName"];
  priority: Props["priority"];
  btn: Props["btn"];
  handleEdit: (task: {
    taskName: string;
    priority: Priority;
    progress: Progress;
    id: number;
  }) => void;
  handleDelete: (taskId: number) => void;
  updateProgress: (task: {
    taskName: string;
    priority: Priority;
    progress: Progress;
    id: number;
  }) => void;
}
// export interface Istate {
//   people: { name: string; age: number }[];
// }

function TaskList(props: IProps) {
  return (
    <div id="taskList">
      {props.tasks.length === 0 ? (
        <>Your task empty.</>
      ) : (
        <>
          {props.tasks?.map((task) => (
            <div className="task">
              <div className="task__content">
                <h3>Task</h3>
                <p>{task?.taskName}</p>
              </div>
              {task?.priority === "High" ? (
                <div className="task__priority task__priority--high">
                  <h3>Priority</h3>
                  <p></p>
                </div>
              ) : task?.priority === "Medium" ? (
                <div className="task__priority task__priority--medium">
                  <h3>Priority</h3>
                  <p></p>
                </div>
              ) : (
                <div className="task__priority task__priority--low">
                  <h3>Priority</h3>
                  <p></p>
                </div>
              )}
              {task?.progress === "To do" ? (
                <div className="task__progress task__progress--todo">
                  <h3 onClick={() => props.updateProgress(task)}> </h3>
                  <p onClick={() => props.updateProgress(task)}></p>
                </div>
              ) : task.progress === "Done" ? (
                <div className="task__progress task__progress--done">
                  <h3 onClick={() => props.updateProgress(task)}> </h3>
                  <p onClick={() => props.updateProgress(task)}></p>
                </div>
              ) : (
                <div className="task__progress task__progress--progress">
                  <h3 onClick={() => props.updateProgress(task)}> </h3>
                  <p onClick={() => props.updateProgress(task)}></p>
                </div>
              )}
              <div className="task__img">
                <img
                  className="task__img task__img--edit"
                  src={EDIT}
                  alt="todo"
                  onClick={() => props.handleEdit(task)}
                />
                <img
                  className="task__img task__img--delete"
                  src={DELETE}
                  alt="todo"
                  onClick={() => props.handleDelete(task.id)}
                />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default TaskList;
