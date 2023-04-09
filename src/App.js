import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import ProductList from './pages/productList/ProductList'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DLSidebar from './components/sidebar-version-dl'
import DLActionbar from './components/action-version-dl'

function App() {
  return (
    <Router>
      {/* I have removed the top bar component of yours */}
      <div className="container">
        {/* I replaced your sidebar with a new side bar this is it */}
        <DLSidebar/>
        {/* I am putting a new component here to act as the container of all rendering items */}
        <DLActionbar/>
      </div>
    </Router>
  );
}

export default App;