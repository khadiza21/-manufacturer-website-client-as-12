import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Footer from "./components/shared/Footer/Footer";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Login/Register";
import NotFound from "./components/shared/NotFound";
import Tools from "./components/pages/Tools/Tools";
import RequireAuth from "./components/pages/Login/RequireAuth";
import Blog from "./components/pages/Public/Blog";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/tools"
          element={
            <RequireAuth>
              <Tools></Tools>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
