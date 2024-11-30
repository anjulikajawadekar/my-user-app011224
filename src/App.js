import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import UserInfo from './pages/UserInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="/user_info/:id" element={<UserInfo/>} />
      </Routes>
    </Router>
  );
}

export default App;
