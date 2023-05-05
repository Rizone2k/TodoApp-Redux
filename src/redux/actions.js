export const AddTodo = (data) => {
  return { type: "todoList/addTodo", payload: data };
};
export const SearchFilter = (data) => {
  return { type: "filter/search", payload: data };
};
export const StatusFilter = (data) => {
  return { type: "filter/status", payload: data };
};
export const PriorityFilter = (data) => {
  return { type: "filter/priority", payload: data };
};
