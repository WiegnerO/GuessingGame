import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/api/hello").then((r) => {
      console.log(`API Status was: ${r.status}`)
      return r.text()
    }).then(t => console.log(`Backend says "${t}" (staus) `))
  },[])

  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
