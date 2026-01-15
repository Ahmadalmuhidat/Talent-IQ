import { useUser } from "@clerk/clerk-react";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home";
import Problems from "./pages/problems";

function App() {
  const { isSignedIn } = useUser();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/problems"
          element={isSignedIn ? <Problems /> : <Navigate to={"/"} />}
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
