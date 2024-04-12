import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import { AppProvider } from "./context/loginContext";
import UsersPage from "./pages/users/index";

const App = () => {
  
  return (
    
    <div className="min-h-[100vh]  bg-gray-50 dark:bg-gray-900 ">
      <AppProvider>
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<UsersPage/>} path="/users" />
        </Routes>
      </AppProvider>
    </div>
   
  );
};

export default App;
