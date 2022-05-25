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
import DashBoard from "./components/pages/DashBoard/DashBoard/DashBoard";
import BkPortfolio from "./components/pages/BkPortfolio/BkPortfolio";
import AddReview from "./components/pages/DashBoard/AddReview/AddReview";
import MyOrder from "./components/pages/DashBoard/MyOrder/MyOrder";
import MyProfile from "./components/pages/DashBoard/MyProfile/MyProfile";
import BuyTool from "./components/pages/BuyTool/BuyTool";
import Payment from "./components/pages/Payment/Payment/Payment";
import AllUsers from "./components/pages/DashBoard/AllUsers/AllUsers";
import RequireAdmin from "./components/pages/Login/RequireAdmin";
import AddProduct from "./components/pages/DashBoard/Admin/AddProduct";
import ManageOrders from "./components/pages/DashBoard/Admin/ManageOrders";
import ManageProducts from "./components/pages/DashBoard/Admin/ManageProducts";

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

        <Route
          path="/tool/:id"
          element={
            <RequireAuth>
              <BuyTool></BuyTool>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/payment/:id"
          element={
            <RequireAuth>
            <Payment></Payment>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard></DashBoard>
            </RequireAuth>
          }
        >
           <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="myorder" element={<MyOrder></MyOrder>}></Route>
         
          <Route path="users" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path="addproduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="manageorder" element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
          <Route path="manageproduct" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/developerimg"
          element={<BkPortfolio></BkPortfolio>}
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
