import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditProfile from "./EditProfile";
import Profile from "./Profile"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Profile/>} />
        <Route path="/edit-profile"  element={<EditProfile/>} />
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
