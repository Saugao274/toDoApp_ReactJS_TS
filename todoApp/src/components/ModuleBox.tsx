import React from "react";
import AddTask from "./AddTask";
import "../css/ModuleBox.scss";
import Cancel from "../img/Cancel.svg";
import { Istate as Props } from "../App";
// interface IProps {
//   title: string;
// }
interface IProps {
  title: Props["title"];
  taskName: Props["taskName"];
  priority: Props["priority"];
  btn: Props["btn"];
}
function ModuleBox(props: IProps) {
  // const [inputData, setInputData] = useState({ name: "", age: "" });
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputData({ ...inputData, [e.target.name]: e.target.value });
  // };
  // const onSubmit = (e) => {};
  return (
    <>
      <div className="boxHandle">
        <div className="boxHandle boxHandle__title">
          <h1>{props.title}</h1>
          <img src={Cancel} alt="" />
        </div>
        <form className="boxHandle boxHandle__taskName">
          <label htmlFor="task">
            <h3>Task</h3>
          </label>
          <input
            type="text"
            id="task"
            placeholder="Task name"
            defaultValue={props?.taskName}
          />
        </form>
        <div className="boxHandle boxHandle__priority">
          <h3>Priority</h3>
          <div className="boxHandle boxHandle__priority__btn">
            <button className="boxHandle priority__btn--high" type="button">
              High
            </button>
            <button className="boxHandle priority__btn--medium" type="button">
              Medium
            </button>
            <button className="boxHandle priority__btn--low" type="button">
              Low
            </button>
          </div>
        </div>
        <div className="boxHandle  boxHandle__submit">
          <label htmlFor="add">
            <input
              className="boxHandle__submit--add"
              type="submit"
              value={props.btn}
              id="add"
            />
          </label>
          <label htmlFor="cancel">
            <input
              className="boxHandle__submit--cancel"
              type="submit"
              value="Cancel"
              id="cancel"
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default ModuleBox;
