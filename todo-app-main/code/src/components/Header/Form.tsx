const Form = () => {
  return (
    <form onSubmit={(event: React.SyntheticEvent) => handleAddTodo(event, task)}>
      <button className="create-task"></button>
      <input onChange={(event) => setTask(event.target.value)} value={task} type="text" placeholder="Create a new todo..." />
    </form>
  );
};

export default Form;
