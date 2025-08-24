import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NotFound } from "./Pages/NotFound.jsx"
import { Home } from "./Pages/Home.jsx"

function App() {
return(
  <>
  <BrowserRouter>
  <Routes>
    <Route index element ={<Home/>} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  </BrowserRouter>
  </>
)
}

export default App
