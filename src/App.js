import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./student_screens/HomeScreen";
import MarkScreen from "./student_screens/MarkScreen";
import Profile from "./student_screens/Profile";
import Registration from "./student_screens/Registration";
import Login from "./student_screens/Login";
import TestScreen from "./student_screens/TestScreen";
import IndividualTest from "./student_screens/IndividualTest";
import { RecoilRoot } from "recoil"
import AdminHome from "./admin_screens/AdminHome";
import SubjectAddingPage from "./admin_screens/SubjectAddingPage";
import TestAddingPage from "./admin_screens/TestAddingPage";
import AdminTestScreen from "./admin_screens/AdminTestScreen";
import AdminMarkScreen from "./admin_screens/AdminMarkScreen";
function App() {
  return (
    <RecoilRoot>
      <div className="bg-warning">
        <Router>
          <Routes>
            <Route path="/users/register" element={<Registration/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/users" element={<HomeScreen/>}/>
            <Route path="/admin" element={<AdminHome/>}/>
            <Route path="/admin/addSubject" element={<SubjectAddingPage/>}/>
            <Route path="/users/:subject" element={<TestScreen/>}/>
            <Route path="/admin/:subject" element={<AdminTestScreen/>}/>
            <Route path="/admin/:subject/addTest" element={<TestAddingPage/>}/>
            <Route path="/users/:subject/:test" element={<IndividualTest/>}/>
            <Route path="/admin/:subject/:test" element={<AdminMarkScreen/>}/>
            <Route path="/users/profile" element={<Profile/>}/>
            <Route path="/users/marks" element={<MarkScreen/>}/>
          </Routes>
        </Router>
        
      </div>
    </RecoilRoot>
  );
}

export default App;
