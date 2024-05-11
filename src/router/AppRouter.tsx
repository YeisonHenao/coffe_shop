import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/Home/HomePage'

const AppRouter = () => {
  return(
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" Component={HomePage} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
