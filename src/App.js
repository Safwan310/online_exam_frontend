import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./student_screens/HomeScreen";
import MarkScreen from "./student_screens/MarkScreen";
import Profile from "./student_screens/Profile";
import Registration from "./student_screens/Registration";
import Login from "./student_screens/Login";
import TestScreen from "./student_screens/TestScreen";
import IndividualTest from "./student_screens/IndividualTest";
import { RecoilRoot } from "recoil"
import AdminLogin from "./admin_screens/AdminLogin";
import AdminHome from "./admin_screens/AdminHome";
import SubjectAddingPage from "./admin_screens/SubjectAddingPage";

function App() {
  return (
    <RecoilRoot>
      <div className="bg-warning">
        <Router>
          <Routes>
            <Route path="/users/register" element={<Registration/>}/>
            <Route path="/users/login" element={<Login/>}/>
            <Route path="/admin/login" element={<AdminLogin/>}/>
            <Route path="/users" element={<HomeScreen/>}/>
            <Route path="/admin" element={<AdminHome/>}/>
            <Route path="/admin/addSubject" element={<SubjectAddingPage/>}/>
            <Route path="/:usertype/:subject" element={<TestScreen/>}/>
            <Route path="/users/:subject/:test" element={<IndividualTest/>}/>
            <Route path="/users/profile" element={<Profile/>}/>
            <Route path="/users/marks" element={<MarkScreen/>}/>
          </Routes>
        </Router>
        
      </div>
    </RecoilRoot>
  );
}

export default App;
