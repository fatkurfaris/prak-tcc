import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import HomeLogin from "./pages/HomeLogin/HomeLogin";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  
  return (
    <div >
        <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/HomeLogin" element={<HomeLogin/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
