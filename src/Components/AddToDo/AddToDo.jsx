import React from "react";
import "./AddToDo.css";

export const AddToDo = ({ toDo, deleteToDo, checked }) => {
  return (
    <>
      <section className="addd">
        <div className="container">
          <div className="addToDo">
            {toDo.map((elm) => {
              return (
                <div className={elm.completed ? "tod" : "to"} key={elm.id}>
                  <input
                    type="checkbox"
                    checked={elm.completed}
                    onChange={() => checked(elm.id)}
                  />
                  <li className={elm.completed ? "textIsDone" : ""}>
                    {elm.title}
                  </li>
                  <button onClick={() => deleteToDo(elm.id)}>Delete</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
