import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import Authlogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"



function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/*common component*/}
      <h1>Header component</h1>

      <Routes>
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path = "login" element={<Authlogin/>}/>
          <Route path = "Register" element={<AuthRegister/>}/>
        </Route>
      </Routes>


    </div>
  )
}

export default App
