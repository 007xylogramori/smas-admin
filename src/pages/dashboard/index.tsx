import { useContext, useEffect } from "react";
import { LoginContext } from "../../context/loginContext";
import { useNavigate } from "react-router-dom";
import SidePannel from "../../components/sidePannel/sidePannel";

const Dashboard = () => {
  const navigate = useNavigate();

  const { userDetails } = useContext(LoginContext);

  return <div>hello dashboard</div>;
};

export default Dashboard;
