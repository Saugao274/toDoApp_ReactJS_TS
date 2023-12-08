import React from "react";
import TODO from "../img/todo.svg";
import PROGRESS from "../img/progress.svg";
import DONE from "../img/done.svg";
import EDIT from "../img/edit.svg";
import DELETE from "../img/delete.svg";
import "../css/TaskList.scss";
function TaskList() {
  return (
    <div className="taskList">
      <div className="task">
        <div className="task task__content">
          <h3>Task</h3>
          <p>Go to Gym</p>
        </div>
        <div className="task task__priority high">
          <h3>Priority</h3>
          <p></p>
        </div>
        <div className="task task__progress todo">
          <h3></h3>
          <p></p>
        </div>
        <img className="task__img edit" src={EDIT} alt="todo" />
        <img className="task__img delete" src={DELETE} alt="todo" />
      </div>
      <div className="task">
        <div className="task task__content">
          <h3>Task</h3>
          <p>Go to Gym</p>
        </div>
        <div className="task task__priority low">
          <h3>Priority</h3>
          <p></p>
        </div>
        <div className="task task__progress progress">
          <h3></h3>
          <p></p>
        </div>
        <img className="task__img edit" src={EDIT} alt="todo" />
        <img className="task__img delete" src={DELETE} alt="todo" />
      </div>
      <div className="task">
        <div className="task task__content">
          <h3>Task</h3>
          <p>Go to Gym</p>
        </div>
        <div className="task task__priority low">
          <h3>Priority</h3>
          <p></p>
        </div>
        <div className="task task__progress progress">
          <h3></h3>
          <p></p>
        </div>
        <img className="task__img edit" src={EDIT} alt="todo" />
        <img className="task__img delete" src={DELETE} alt="todo" />
      </div>
      <div className="task">
        <div className="task task__content">
          <h3>Task</h3>
          <p>Go to Gym</p>
        </div>
        <div className="task task__priority high">
          <h3>Priority</h3>
          <p></p>
        </div>
        <div className="task task__progress done">
          <h3></h3>
          <p></p>
        </div>
        <img className="task__img edit" src={EDIT} alt="todo" />
        <img className="task__img delete" src={DELETE} alt="todo" />
      </div>
      <div className="task">
        <div className="task task__content">
          <h3>Task</h3>
          <p>Go to Gym</p>
        </div>
        <div className="task task__priority medium">
          <h3>Priority</h3>
          <p></p>
        </div>
        <div className="task task__progress progress">
          <h3></h3>
          <p></p>
        </div>
        <img className="task__img edit" src={EDIT} alt="todo" />
        <img className="task__img delete" src={DELETE} alt="todo" />
      </div>
      <div className="task">
        <div className="task task__content">
          <h3>Task</h3>
          <p>Go to Gym</p>
        </div>
        <div className="task task__priority medium">
          <h3>Priority</h3>
          <p></p>
        </div>
        <div className="task task__progress progress">
          <h3></h3>
          <p></p>
        </div>
        <img className="task__img edit" src={EDIT} alt="todo" />
        <img className="task__img delete" src={DELETE} alt="todo" />
      </div>

      <div className="task">
        <div className="task task__content">
          <h3>Task</h3>
          <p>Go to Gym</p>
        </div>
        <div className="task task__priority medium">
          <h3>Priority</h3>
          <p></p>
        </div>
        <div className="task task__progress progress">
          <h3></h3>
          <p></p>
        </div>
        <img className="task__img edit" src={EDIT} alt="todo" />
        <img className="task__img delete" src={DELETE} alt="todo" />
      </div>
    </div>
  );
}

export default TaskList;
