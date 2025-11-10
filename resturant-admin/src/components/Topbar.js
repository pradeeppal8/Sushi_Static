import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";  // ✅ Import navigate
import logo from "../assets/logo.png";
// import './Topbar.scss';
// import { FaBars } from 'react-icons/fa';

function Topbar() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate(); // ✅ Initialize navigate

    const handleItemClick = (item) => {
        setOpen(false);
        if (item === "Logout") {
            // ✅ Navigate to Admin Login
            navigate("/");
            return;
        }

        setSelected(item);
    };

    const closeModal = () => {
        setSelected(null);
    };
    return (
        <div className="topbar">
            <div className="topbar-center">
                <input type="text" placeholder="Press / to search" />
            </div>

            <div className="profile-header" onClick={() => setOpen(!open)}>
                <img src={logo} alt='' style={{ width: 28 }} />

                <span className="username">Admin</span>
                <span className={`arrow ${open ? "up" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" class="ml-2"><path fill="var(--90)" d="M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"></path></svg>
                </span>
            </div>

            {/* Dropdown */}
            {open && (
                <div className="dropdown">
                    <div className="dropdown-item my-item" onClick={() => handleItemClick("My Account")}>My Account</div>
                    <div className="dropdown-item" onClick={() => handleItemClick("My Billing")}>My Billing</div>
                    <div className="dropdown-item" onClick={() => handleItemClick("My Domespace")}>My Sushi</div>
                    <div className="dropdown-item" onClick={() => handleItemClick("My Notifications")}>My Notifications</div>
                    <div className="dropdown-item logout-item" onClick={() => handleItemClick("Logout")}>Logout</div>
                </div>
            )}

            {/* <div className="topbar-right">
                <img
                    className="avatar"
                    src="https://i.pravatar.cc/40?img=3"
                    alt="user"
                />
            </div> */}
        </div>
    );
};

export default Topbar;
