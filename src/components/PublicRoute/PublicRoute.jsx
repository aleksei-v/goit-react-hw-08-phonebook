import { Navigate } from "react-router-dom";
import CustomOutlet from "../../utils/Outlet";
import { useAuth } from '../../hooks/useAuth'

const PublicRoute = () => {
    const { isUserLogin } = useAuth();
    
    if (isUserLogin) {
        return <Navigate to="/contacts"/>
    }
    return <CustomOutlet/>
}
 
export default PublicRoute;