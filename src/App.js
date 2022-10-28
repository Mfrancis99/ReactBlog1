import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Single from "./pages/single/single";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={user ? <Home /> : <Register />} />
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
        <Route exact path="/settings" element={user ? <Settings /> : <Register />} />
        <Route exact path="/post/:postId" element={<Single />} />
        <Route exact path="/write" element={user ? <Write /> : <Register />} />
      </Routes>
    </Router>

  );
}

export default App;
