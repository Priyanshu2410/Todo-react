import { Routes , Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import LoginWithLocalStorage from "./component/login";
import Home from "./component/todo.js";
// import './App.css';


function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<LoginWithLocalStorage/>}/>
   
    </Routes>
   </>
  );
}

export default App;
