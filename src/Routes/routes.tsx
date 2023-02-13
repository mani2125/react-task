import { Routes, Route, Navigate } from "react-router-dom";
import { useAppContext } from '../Store'
import Login from "../Component/Login/Login";
import AboutUs from "../Component/AboutUs/AboutUs";
import Profile from "../Component/Profile/Profile";
import NotFound from "../Component/NotFound/NotFound";

/**
 * Should render static header and footer
 * If authentication passed reder respective component
 * If auth failed it redirect to login page
*/
export const Router = () => {
  const { store: { loggedIn } } = useAppContext();

  return (
    <Routes>
      <Route path="/"  element={loggedIn ? <Navigate to="/about-us" replace /> : <Login />} />
      <Route path="/login" element={loggedIn ? <Navigate to="/about-us" replace /> : <Login />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/Profile" element={loggedIn ? <Profile /> : <Login />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
