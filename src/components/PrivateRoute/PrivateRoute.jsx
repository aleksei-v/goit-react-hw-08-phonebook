import { Navigate } from "react-router-dom";
import { useAuth } from 'hooks/useAuth';
import CustomOutlet from "../../utils/Outlet";

const PrivateRoute = () => {
    const { isUserLogin } = useAuth();
    
    if (!isUserLogin) {
        
        return <Navigate to="/login" />
    }
    return <CustomOutlet/>
}
 
export default PrivateRoute;