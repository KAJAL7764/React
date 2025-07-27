import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <FontAwesomeIcon icon={faSquarePlus} />
          <p>Add Item</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
        <FontAwesomeIcon icon={faCircleCheck} />
          <p>List Items</p>
        </NavLink>

        <NavLink to='orders' className="sidebar-option">
        <FontAwesomeIcon icon={faCircleCheck} />
          <p>Order</p>
        </NavLink>
      </div>
    </div>
  );
}
