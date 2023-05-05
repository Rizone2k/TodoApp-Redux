export const todoListSelector = (state) => {
  const searchText = filterSearchSelector(state);
  const status = filterStatusSelector(state);
  const priority = filterPrioritySelector(state);
  console.log("priority", priority);
  const todoRemaining = state.todoList.filter((todo) => {
    return status === "All" && priority.length
      ? todo.name.includes(searchText) && priority.includes(todo.priority)
      : todo.name.includes(searchText) &&
          (status === "Completed" ? todo.completed : !todo.complete) &&
          (priority.length ? priority.includes(todo.priority) : true);
  });
  return todoRemaining;
};

export const filterSearchSelector = (state) => {
  return state.filter.search;
};
export const filterStatusSelector = (state) => {
  return state.filter.status;
};
export const filterPrioritySelector = (state) => {
  return state.filter.priority;
};
