import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = useSelector((state) => state.yetkiSlice.kullanici);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
