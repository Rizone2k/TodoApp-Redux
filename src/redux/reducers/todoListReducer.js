const initState = [
  { id: 1, name: "Learn React", completed: true, priority: "High" },
  { id: 2, name: "Learn Redux", completed: false, priority: "Low" },
  { id: 3, name: "Learn Node", completed: false, priority: "Medium" },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todoListReducer;
