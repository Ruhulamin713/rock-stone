import { Route, Routes } from "react-router-dom";
import "./App.css";

import About from "./components/Header/About/About";
import Blog from "./components/Header/Blog/Blog";
import CheackOut from "./components/Header/CheackOut/CheackOut";
import Header from "./components/Header/Header";
import Login from "./components/Header/Login/Login";
import Register from "./components/Header/Register/Register";
import Home from "./components/Home/Home";
import ServiceDetails from "./components/Home/ServiceDetails/ServiceDetails";
import NotFound from "./components/NotFound/NotFound";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route
          path="/checkOut"
          element={
            <RequireAuth>
              <CheackOut />
            </RequireAuth>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
