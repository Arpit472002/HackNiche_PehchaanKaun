import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import AuthProvider from "./context/userContext";
import Signup from "./components/signup";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

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
          </Routes>
        </Router>
      </AuthProvider>
      <Navbar/>
      <Carousel />
    </div>
    </>
  );
}

export default App;
