let initialState = {
  count: 0,
  toDoList: [],
};
const ReducerCount = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "ADDTODO":
      return {
        toDoList: [
          ...state.toDoList,
          {
            task: action.payload,
            id: state.toDoList.length + 1,
            complete: false,
          },
        ],
      };

    case "DELETE":
      let temp = state.toDoList.filter((data) => data.id !== action.payload);
      return {
        toDoList: temp,
      };

    case "EDITTODO":
      let tempEDitData = state.toDoList.map((data) =>
        data.id === action.payload.id
          ? { ...data, task: action.payload.data }
          : data
      );
      return {
        toDoList: tempEDitData,
      };

    default:
      return state;
  }
};

export default ReducerCount;
