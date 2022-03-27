import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";


export default function App() {
  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index path="/login" element={<Login />}></Route>
        <Route  path="/register" element={<Register />}></Route>
        <Route  path="/home" element={<Home />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));