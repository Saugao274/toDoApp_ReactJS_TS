import React from "react";
import AddTask from "./AddTask";
import "../css/boxHandle.scss";
import Cancel from "../img/Cancel.svg";
function ModuleBox() {
  return (
    <>
      <div className="boxHandle">
        {/* <AddTask /> */}
        <div className="boxHandle boxHandle__title">
          <h1>Add Task</h1>
          <img src={Cancel} alt="" />
        </div>
        <div>
          <form>
            <label htmlFor="task">Task</label>
            <input type="text" id="task" />
          </form>
        </div>
        <div>
          <h3>Priority</h3>
          <div>
            <div>High</div>
            <div>Medium</div>
            <div>Low</div>
          </div>
        </div>
        <div>
          <label htmlFor="add">
            <input type="submit" value="Add" id="add" />
          </label>
          <label htmlFor="cancel">
            <input type="submit" value="Cancel" id="cancel" />
          </label>
        </div>
      </div>
    </>
  );
}

export default ModuleBox;
