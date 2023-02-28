import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import FormLogin from "./components/formLogin"

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-3/4">
          <Header />
          <Outlet />
        </div>
      </div>
      <FormLogin />
      <Footer />
    </>
  )
}

export default App
