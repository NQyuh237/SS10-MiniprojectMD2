import { Route, Routes } from "react-router-dom";
import "./App.css";
import Count from "./components/BG/Count";
import Random from "./components/BG/Random";
import Nav3 from "./components/BG/Nav3";
import { ToDoList } from "./components/ToDoLists/ToDoList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav3 />}>
          <Route index element={<Count />} />
          <Route path="/Random" element={<Random />} />
          <Route path="/Todo" element={<ToDoList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
