import { Todo } from "../../App";
import MaxWidthWrapper from "../MaxWidthWrapper";
import TodoActions from "./TodoActions";
import TodoElement from "./TodoElement";

interface Props {
  currentFilter: string;
  data: Todo[];
  active: number;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  clearCompleted: () => void;
  toggleCompleted: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoContainer = ({ active, currentFilter, data, setFilter, clearCompleted, toggleCompleted, removeTodo }: Props) => {
  return (
    <section className="content">
      <MaxWidthWrapper>
        <div className="app-container">
          <div className="todo-container">
            {data.map((todo) => (
              <TodoElement toggleCompleted={toggleCompleted} removeTodo={removeTodo} key={todo.id} taskData={todo} />
            ))}
          </div>
          <TodoActions />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default TodoContainer;
