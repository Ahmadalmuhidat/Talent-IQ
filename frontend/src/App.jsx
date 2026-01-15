import { useUser } from "@clerk/clerk-react";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home";
import Problems from "./pages/problems";
import Problem from "./pages/problem";
import Dashboard from "./pages/dashoard";

function App() {
  const { isSignedIn, isLoaded } = useUser();

  // this will fix the flickerering issue
  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={!isSignedIn ? <Home /> : <Navigate to={"/dashboard"} />}
        />
        <Route
          path="/problems"
          element={isSignedIn ? <Problems /> : <Navigate to={"/"} />}
        />
        <Route
          path="/problems/:id"
          element={isSignedIn ? <Problem /> : <Navigate to={"/"} />}
        />
        <Route
          path="/dashboard"
          element={isSignedIn ? <Dashboard /> : <Navigate to={"/"} />}
        />
        <Route
          path="*"
          element={<div>404 Not Found</div>}
        />
      </Routes>

      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  )
}

export default App;
