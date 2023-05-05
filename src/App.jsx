import { useState } from "react";
import { Typography, Divider } from "antd";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import "./App.css";
const { Title } = Typography;

function App() {
  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgb(177 168 249 / 82%)",
        padding: 20,
        boxShadow: "0 0 5px 3px #9aacc0",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

// function App() {
//   const [count, setCount] = useState(0);

//   const initValues = { value: 0 };
//   // action
//   const action = { type: "INCREMENT", payload: 10 };
//   // actionCreator
//   const actionCreator = (data) => {
//     return {
//       type: "INCREMENT",
//       payload: data.payload,
//     };
//   };
//   console.log("------------------------------------");
//   console.log(actionCreator(action));
//   console.log("------------------------------------");

//   // Reducer
//   const Reducer = (state = initValues, action) => {
//     switch (action.type) {
//       case "INCREMENT":
//         return { ...state, value: state.value + state.payload };
//         break;
//       case "DECREMENT":
//         return console.log("DECREMENT", state.value);
//         break;
//       default:
//         return console.log("Default!");
//     }
//   };

//   // Dispatch ~ phia UI de cap nhat state
//   //  la 1 fuction

//   Reducer(initValues, action);
//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   );
// }

export default App;
