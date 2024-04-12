import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import { AppProvider } from "./context/loginContext";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  
  return (
    
    <div>
      <Navbar/>
      <AppProvider>
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<LoginPage />} path="/login" />
        </Routes>
      </AppProvider>
    </div>
   
  );
};

export default App;
