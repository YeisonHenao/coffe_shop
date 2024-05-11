import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/Home/HomePage'
import AboutPage from "../pages/About/AboutPage";
import ProductPage from "../pages/Product/ProductPage";

const AppRouter = () => {
  return(
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/products" Component={ProductPage} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
