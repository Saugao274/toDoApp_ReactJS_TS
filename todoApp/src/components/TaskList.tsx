import React from "react";
import EDIT from "../img/edit.svg";
import DELETE from "../img/delete.svg";
import "../css/TaskList.scss";
function TaskList() {
  return (
    <div id="taskList">
      <div className="task">
        <div className="task__content">
          <h3>Task</h3>
          <p>Go to Gym</p>
        </div>
        <div className="task__priority task__priority--high">
          <h3>Priority</h3>
          <p></p>
        </div>
        <div className="task__progress task__progress--todo">
          <h3></h3>
          <p></p>
        </div>
        <div className="task__img">
          <img className="task__img task__img--edit" src={EDIT} alt="todo" />
          <img
            className="task__img task__img--delete"
            src={DELETE}
            alt="todo"
          />
        </div>
      </div>
      <div className="task">
        <div className="task__content">
          <h3>Task</h3>
          <p>Go to Gym</p>
        </div>
        <div className="task__priority task__priority--low">
          <h3>Priority</h3>
          <p></p>
        </div>
        <div className="task__progress task__progress--progress">
          <h3></h3>
          <p></p>
        </div>
        <div className="task__img">
          <img className="task__img task__img--edit" src={EDIT} alt="todo" />
          <img
            className="task__img task__img--delete"
            src={DELETE}
            alt="todo"
          />
        </div>
      </div>
      <div className="task">
        <div className="task__content">
          <h3>Task</h3>
          <p>Go to Gym</p>
        </div>
        <div className="task__priority task__priority--low">
          <h3>Priority</h3>
          <p></p>
        </div>
        <div className="task__progress task__progress--progress">
          <h3></h3>
          <p></p>
        </div>
        <div className="task__img">
          <img className="task__img task__img--edit" src={EDIT} alt="todo" />
          <img
            className="task__img task__img--delete"
            src={DELETE}
            alt="todo"
          />
        </div>
      </div>
      <div className="task">
        <div className="task__content">
          <h3>Task</h3>
          <p>Go to Gym</p>
        </div>
        <div className="task__priority task__priority--high">
          <h3>Priority</h3>
          <p></p>
        </div>
        <div className="task__progress task__progress--done">
          <h3></h3>
          <p></p>
        </div>
        <div className="task__img">
          <img className="task__img task__img--edit" src={EDIT} alt="todo" />
          <img
            className="task__img task__img--delete"
            src={DELETE}
            alt="todo"
          />
        </div>
      </div>
      <div className="task">
        <div className="task__content">
          <h3>Task</h3>
          <p>Go to Gym</p>
        </div>
        <div className="task__priority task__priority--medium">
          <h3>Priority</h3>
          <p></p>
        </div>
        <div className="task__progress task__progress--progress">
          <h3></h3>
          <p></p>
        </div>
        <div className="task__img">
          <img className="task__img task__img--edit" src={EDIT} alt="todo" />
          <img
            className="task__img task__img--delete"
            src={DELETE}
            alt="todo"
          />
        </div>
      </div>
      <div className="task">
        <div className="task__content">
          <h3>Task</h3>
          <p>Go to Gym</p>
        </div>
        <div className="task__priority task__priority--medium">
          <h3>Priority</h3>
          <p></p>
        </div>
        <div className="task__progress task__progress--progress">
          <h3></h3>
          <p></p>
        </div>
        <div className="task__img">
          <img className="task__img task__img--edit" src={EDIT} alt="todo" />
          <img
            className="task__img task__img--delete"
            src={DELETE}
            alt="todo"
          />
        </div>
      </div>

      <div className="task">
        <div className="task__content">
          <h3>Task</h3>
          <p>Go to Gym</p>
        </div>
        <div className="task__priority task__priority--medium">
          <h3>Priority</h3>
          <p></p>
        </div>
        <div className="task__progress task__progress--progress">
          <h3></h3>
          <p></p>
        </div>
        <div className="task__img">
          <img className="task__img task__img--edit" src={EDIT} alt="todo" />
          <img
            className="task__img task__img--delete"
            src={DELETE}
            alt="todo"
          />
        </div>
      </div>
    </div>
  );
}

export default TaskList;
