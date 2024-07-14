import { Filter } from "../../type";

const TodoActions = () => {
  return (
    <div className="todo-container-actions">
      <p className="items__info">{active} items left</p>
      <div className="actions-container">
        {Object.keys(Filter).map((filter) => (
          <button key={filter} onClick={() => setFilter(filter)} className={filter === currentFilter ? "selected" : ""}>
            {filter}
          </button>
        ))}
      </div>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoActions;
