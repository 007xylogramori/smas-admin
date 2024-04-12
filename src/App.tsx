import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import { AppProvider } from "./context/loginContext";

const App = () => {
  
  return (
    
    <div>
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
