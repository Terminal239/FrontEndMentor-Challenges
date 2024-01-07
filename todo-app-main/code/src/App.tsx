import { createContext, useCallback, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import TodoContainer from "./components/Container/TodoContainer";
import { Todo, Filter } from "./type";

export const ThemeContext = createContext("");

function App() {
  const [filter, setFilter] = useState<string>(Filter.All);
  const [theme, setTheme] = useState<string>("dark");
  const [todos, setTodos] = useState<Todo[]>(INITIAL);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const length = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    const cleared = todos.filter((todo) => !todo.completed);
    setTodos(cleared);
  };

  const changeFilter = useCallback((): Todo[] => {
    return filter === "All" ? todos : filter === "Completed" ? todos.filter(({ completed }) => completed) : todos.filter(({ completed }) => !completed);
  }, [todos, filter]);

  const toggleCompleted = (id: string) => {
    let foundTask: Todo = todos.find((todo) => todo.id === id)!;
    foundTask = {
      ...foundTask,
      completed: !foundTask.completed,
    };

    const updated = todos.map((todo) => (todo.id === id ? foundTask : todo));
    setTodos(updated);
  };

  const removeTodo = (id: string) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  useEffect(() => {
    const filtered = changeFilter();
    setFilteredTodos(filtered);
  }, [changeFilter, filter]);

  const handleAddTodo = (event: React.SyntheticEvent, task: string) => {
    event.preventDefault();
    if (task.trim().length === 0) return;

    const newTask: Todo = {
      id: crypto.randomUUID(),
      task,
      completed: false,
    };
    setTodos((prev) => prev.concat(newTask));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <main className={`${theme}`}>
        <Header handleAddTodo={handleAddTodo} setTheme={setTheme} />
        <TodoContainer
          removeTodo={removeTodo}
          toggleCompleted={toggleCompleted}
          clearCompleted={clearCompleted}
          active={length}
          setFilter={setFilter}
          currentFilter={filter}
          data={filteredTodos}
        />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
