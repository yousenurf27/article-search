import { Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Search from "./page/Search"

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/search/*" element={<Search />} />
    </Routes>
  )
}

export default App
