import "./ToDo.css";

export const ToDo = ({ state, toDoText, add }) => {
  return (
    <header>
      <div className="container">
        <div className="toDo">
          <input
            placeholder="Task"
            value={state.text}
            onChange={(e) => toDoText(e)}
          />
          <button onClick={add}>Add ToDo</button>
        </div>
      </div>
    </header>
  );
};
