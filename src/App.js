import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import AuthProvider from "./context/userContext";
import Signup from "./components/signup";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Events from "./components/Events";
import SpecificEvent from "./components/SpecificEvent";

function App() {
  return (
    <>
    <div>
      <AuthProvider>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        <Router>
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/blog" element={<Blog />}></Route>
            <Route exact path="/home" element={<Home/>}></Route>
            <Route exact path="/events" element={<Events/>}></Route>
            <Route path="/eventsdetails" element={<SpecificEvent/>}></Route>

          </Routes>
        </Router>
      </AuthProvider>
    </div>
    </>
  );
}

export default App;
