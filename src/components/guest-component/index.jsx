import {Navigate, Route, Routes} from "react-router-dom";
import LogIn from "../../pages/log-in";
import React from "react";
import Registration from "../../pages/registr-in";

const GuestComponent = () => {
  return <Routes>
  <Route element={<Registration/>} path={'/registration'}/>
    <Route element={<LogIn/>} path={'/login'}/>
    <Route element={<Navigate to={'/login'}/>} path={'/*'}/>
  </Routes>
}
export default GuestComponent