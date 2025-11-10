import React, { useState } from 'react';
import {
    FaHome,
    FaInfoCircle,
    FaServicestack,
    FaBoxOpen,
    FaBlog,
    FaEnvelope,
    FaBell,
    FaPlus,
    FaMinus,
    FaSlidersH
} from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";
import header from '../assets/header-logo.png';


function Sidebar() {
    const [expanded, setExpanded] = useState(true);
    const navigate = useNavigate();

    return (
        <>
            <div className={`drop ${expanded ? 'expanded' : 'collapsed'}`}>
                <div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
                    <div className="top-section">
                        <div className={`logo ${expanded ? 'expanded' : 'collapsed'}`}>
                            <img src={logo} alt="Logo" />
                        </div>
                        {expanded && <div className="logo">
                            <img src={header} alt="Logo" />
                        </div>}
                    </div>

                    <nav className="menu">
                        <MenuItem icon={<FaHome />} text="Dashboard" expanded={expanded} onClick={() => navigate("/dashboard")} />
                        <MenuItem icon={<FaBell />} text="Notifications" expanded={expanded} onClick={() => navigate("/customers")} />
                        <MenuItem icon={<FaHome />} text="Home" expanded={expanded} onClick={() => navigate("/home")} />
                        <MenuItem icon={<FaInfoCircle />} text="About Us" expanded={expanded} onClick={() => navigate("/about")} />
                        <MenuItem icon={<FaServicestack />} text="Services" expanded={expanded} onClick={() => navigate("/services")} />
                        <MenuItem icon={<FaBoxOpen />} text="Products" expanded={expanded} onClick={() => navigate("/products")} />
                        <MenuItem icon={<FaBlog />} text="Blog" expanded={expanded} onClick={() => navigate("/blog")} />
                        <MenuItem icon={<FaEnvelope />} text="Contact" expanded={expanded} onClick={() => navigate("/contact")} />
                        {/* <MenuItem icon={<FaSlidersH />} text="Settings" expanded={expanded} onClick={() => navigate("/settings")} /> */}
                        <MenuItem
                            icon={<FaSlidersH />}
                            text="Settings"
                            expanded={expanded}
                            subItems={[
                                { label: "General", path: "/configuration" },
                                { label: "Module Access", path: "/settings/account" },
                                { label: "Billing & Account", path: "/settings/notifications" },
                            ]}
                        />
                    </nav>
                </div>
                <button className="toggle-btn" onClick={() => setExpanded(!expanded)}>
                    ☰
                </button>
            </div>
        </>

    );
}

// function MenuItem({ icon, text, expanded, onClick }) {
//     return (
//         <div className="menu-item" onClick={onClick}>
//             <div className="icon">{icon}</div>
//             {expanded && <div className="text">{text}</div>}
//         </div>
//     );
// }

const MenuItem = ({ icon, text, expanded, subItems = [] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (subItems.length > 0) {
            setIsOpen(!isOpen);
        } else {
            navigate(`/${text.toLowerCase()}`);
        }
    };

    return (
        <div className="menu-item-wrapper">
            <div className={`menu-item ${isOpen ? "open" : ""}`} onClick={handleClick}>
                <div className="icon">{icon}</div>
                {expanded && <div className="text">{text}</div>}
                {subItems.length > 0 && (
                    <div className="dropdown-icon">
                        {isOpen ? <FaMinus /> : <FaPlus />}
                    </div>
                )}
            </div>

            {isOpen && subItems.length > 0 && (
                <div className="submenu">
                    {subItems.map((item, i) => (
                        <div
                            key={i}
                            className="submenu-item"
                            onClick={() => navigate(item.path)}
                        >
                            {expanded && <span>{item.label}</span>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


export default Sidebar;

