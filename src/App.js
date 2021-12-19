import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./student_screens/HomeScreen";
import MarkScreen from "./student_screens/MarkScreen";
import Profile from "./student_screens/Profile";
import Registration from "./student_screens/Registration";
import Login from "./student_screens/Login";

function App() {
  return (
    <div className="bg-warning">
      <Router>
        <Routes>
          <Route path="/register" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/marks" element={<MarkScreen/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
