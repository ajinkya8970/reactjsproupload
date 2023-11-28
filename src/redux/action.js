export const increment = () => {
  return { type: "INCREMENTNUMBER" };
};

export const decrement = () => {
  return { type: "DECREMENT" };
};

export const addTodo = (todo) => {
  return { type: "ADDTODO", payload: todo };
};

export const deleteToDo = (id) => {
  return { type: "DELETE", payload: id };
};
export const editToDo = (data) => {
  return { type: "EDITTODO", payload: data };
};
