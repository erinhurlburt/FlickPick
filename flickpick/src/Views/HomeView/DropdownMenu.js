import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const DropdownMenu = ({ onLogout }) => {
  const navigate = useNavigate();
  return (
    <div className="dropdown-menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Movie of the Day</li>
        <li>
          <button
            onClick={() => {
              onLogout();
              navigate("/signin");
            }}
          >
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
