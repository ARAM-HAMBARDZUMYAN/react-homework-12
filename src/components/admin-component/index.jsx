import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import React from "react";
import Dashboard from "../../pages/dashboard";
import './style.css'
import Users from "../../pages/users";

const AdminComponent = () => {
  return <div className="P-admin-component">
    <div className='P-navigation-list'>
      <ul>
        <li>
          <NavLink to={'/dashboard'}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={'/users'}>Users</NavLink>
        </li>
      </ul>
    </div>
    <div className='P-main-pages'>
      <Routes>
        <Route element={<Dashboard/>} path={'/dashboard'}/>
        <Route element={<Users/>} path={'/users'}/>
        <Route element={<Navigate to={'/dashboard'}/>} path={'/*'}/>
      </Routes>
    </div>
  </div>
}
export default AdminComponent