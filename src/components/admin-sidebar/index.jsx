import {NavLink} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

const AdminSidebar = () => {
  const userData = useSelector(state=>state.registrationReducer.userData)
  return <div className='P-navigation-list'>

      <h1>{userData.firstname}</h1>
    <ul>
      <li>
        <NavLink to={'/category'}>Category</NavLink>
      </li>
      <li>
        <NavLink to={'/products'}>Products</NavLink>
      </li>
    </ul>
  </div>
}
export default AdminSidebar