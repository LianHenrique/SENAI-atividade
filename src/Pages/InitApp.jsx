import { Outlet } from "react-router"
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "../Context/UserContext";

const InitApp = () => {
  return (
    <div>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </div>
  )
}

export default InitApp