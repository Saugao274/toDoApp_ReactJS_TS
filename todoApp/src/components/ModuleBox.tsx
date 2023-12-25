import React from "react";
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
  openBox: boolean;
  setOpenBox: React.Dispatch<React.SetStateAction<boolean>>;
  handleTaskName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriority: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  submitAdd: () => void;
  submitEdit: () => void;
  clickPriority: string;
  disable: boolean;
}
function ModuleBox(props: IProps) {
  // const [inputData, setInputData] = useState({ name: "", age: "" });
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputData({ ...inputData, [e.target.name]: e.target.value });
  // };
  // const onSubmit = (e) => {};
  // const [cancelStyle, setCancelStyle] = "none";
  function onClose() {
    props.setOpenBox(false);
  }
  return (
    <>
      <div id="overlay" className={props.openBox ? "show" : ""}>
        <div className="boxHandle">
          <div className="boxHandle boxHandle__title">
            <h1>{props.title}</h1>
            <img src={Cancel} alt="" onClick={onClose} />
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                props.handleTaskName(e)
              }
            />
          </form>
          <div className="boxHandle boxHandle__priority">
            <h3>Priority</h3>
            <div className="boxHandle boxHandle__priority__btn">
              <button
                className="boxHandle priority__btn--high"
                type="button"
                value={"high"}
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                  props.handlePriority(e)
                }
                value-clicked={
                  props.clickPriority === "High" || props.priority === "High"
                    ? "true"
                    : "false"
                }
              >
                High
              </button>
              <button
                className="boxHandle priority__btn--medium"
                type="button"
                value={"medium"}
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                  props.handlePriority(e)
                }
                value-clicked={
                  props.clickPriority === "Medium" ||
                  props.priority === "Medium"
                    ? "true"
                    : "false"
                }
              >
                Medium
              </button>
              <button
                className="boxHandle priority__btn--low"
                type="button"
                value={"low"}
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                  props.handlePriority(e)
                }
                value-clicked={
                  props.clickPriority === "Low" || props.priority === "Low"
                    ? "true"
                    : "false"
                }
              >
                Low
              </button>
            </div>
          </div>

          <div className="boxHandle  boxHandle__submit">
            <label htmlFor="submit">
              <button
                className="boxHandle__submit--add"
                type="submit"
                id="submit"
                onClick={() => {
                  if (
                    !props.disable &&
                    props.taskName.trim() !== "" &&
                    props.priority !== ""
                  ) {
                    props.btn === "Add"
                      ? props.submitAdd()
                      : props.submitEdit();
                  }
                }}
                disabled={props.disable}
              >
                {props.btn}
              </button>
            </label>
            <label htmlFor="cancel">
              <input
                className="boxHandle__submit--cancel"
                type="submit"
                value="Cancel"
                id="cancel"
                onClick={onClose}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModuleBox;
