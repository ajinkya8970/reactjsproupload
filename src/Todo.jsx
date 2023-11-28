import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteToDo, editToDo } from "./redux/action";

const Todo = () => {
  const [todo, settodo] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.ReducerCount.toDoList);
  console.log(data);

  const handleClick = () => {
    dispatch(addTodo(todo));
    settodo("");
  };

  const hanldeDelete = (id) => {
    dispatch(deleteToDo(id));
  };

  const hanldeEdit = (id) => {
    let tempTask = prompt("Edit the Task");

    if (tempTask) {
      dispatch(editToDo({ id: id, data: tempTask }));
    }
  };
const handleComplete=()=>{
  
}
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
        placeholder="Enter a text"
      />

      <button onClick={handleClick}>Add a task</button>

      <br />

      {data.map((data, index) => {
        return (
          <div>
            {data.task}
            <button onClick={() => hanldeDelete(data.id)}>Delete</button>
            <button onClick={() => hanldeEdit(data.id)}>Edit</button>
            <input type="checkbox" onChange={handleComplete} />
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
