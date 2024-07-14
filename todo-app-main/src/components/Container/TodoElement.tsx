import { useState } from "react";
import ThemeCheck from "../assets/icon-check.svg";
import ThemeCross from "../assets/icon-cross.svg";
import { Todo } from "../../App";
import { useWindowSize } from "@uidotdev/usehooks";

interface Props {
  taskData: Todo;
  toggleCompleted: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoElement = ({ taskData, toggleCompleted, removeTodo }: Props) => {
  const { completed, id, task } = taskData;
  const { width } = useWindowSize();
  const [revealDelete, setRevealDelete] = useState<boolean>(false);

  return (
    <article className={`todo-element ${completed ? "completed" : ""}`} key={id} onMouseOver={() => setRevealDelete(true)} onMouseOut={() => setRevealDelete(false)}>
      <button onClick={() => toggleCompleted(id)} className="mark-completed">
        {completed && <img src={ThemeCheck} alt="check icon" />}
      </button>
      <p className={completed ? "completed" : ""}>{task}</p>
      {(revealDelete || width! < 600) && (
        <button className="delete" onClick={() => removeTodo(id)}>
          <img className="delete-icon" src={ThemeCross} alt="delete icon" />
        </button>
      )}
    </article>
  );
};

export default TodoElement;
