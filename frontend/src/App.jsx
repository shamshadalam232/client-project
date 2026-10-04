import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import PrivacyPolicy from "./pages/PrivacyPage";


function App() {
  return (
  <>
    <Navbar />
    <Routes>
      
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
              </ProtectedRoute>
        }
      />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />


    </Routes>
    </>
  );
}

export default App;