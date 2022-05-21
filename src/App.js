import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from './components/shared/Header';

function App() {
  return (
    <div>
     <Header></Header>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
