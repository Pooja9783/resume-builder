import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Headers from "./components/Headers";
import Body from "./components/Body";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Headers />} />  
      <Route path='/create-resume' element={<Body />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
