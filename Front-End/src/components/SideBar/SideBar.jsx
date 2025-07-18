import React, { useState } from 'react';
import './SideBar.css';
import { FaHome, FaUserMd, FaFilePrescription, FaFileInvoiceDollar, FaPrint, FaUser } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
   <>
     <div
      className={`side-bar ${isExpanded ? 'expanded' : 'collapsed'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <ul>
        <li onClick={() => handleNavigate('/')}>
          <FaHome className="icon" />
          {isExpanded && <span>Home</span>}
        </li>
        <li onClick={() => handleNavigate('/dashboard')}>
          <MdDashboard className="icon" />
          {isExpanded && <span>Dashboard</span>}
        </li>
        <li onClick={() => handleNavigate('/consultation')}>
          <FaUserMd className="icon" />
          {isExpanded && <span>Consultation</span>}
        </li>
        <li onClick={() => handleNavigate('/prescription')}>
          <FaFilePrescription className="icon" />
          {isExpanded && <span>Prescription</span>}
        </li>
        <li onClick={() => handleNavigate('/billing')}>
          <FaFileInvoiceDollar className="icon" />
          {isExpanded && <span>Billing</span>}
        </li>
        <li onClick={() => handleNavigate('/printing')}>
          <FaPrint className="icon" />
          {isExpanded && <span>Printing</span>}
        </li>
        <li onClick={() => handleNavigate('/user')}>
          <FaUser className="icon" />
          {isExpanded && <span>User</span>}
        </li>
      </ul>
    </div>
   </>
   
  );
};

export default SideBar;
