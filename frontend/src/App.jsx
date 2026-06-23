import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Monitoramento from "./pages/monitoramento"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/monitoramento"
          element={<Monitoramento />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App