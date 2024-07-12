import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import userImg from "../assets/userpic.png";
import { FaRegBell } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />

        <main className="dashboard">
          <div className="bar">
              <BsSearch/>
              <input type="text" placeholder="Search for data, users, docs" />
              <FaRegBell/>
              <img src={userImg} alt="User" />
          </div>
        </main>

    </div>
  );
};

export default Dashboard;