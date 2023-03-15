
import { useSelector } from "react-redux"
import { Navigate, RouteProps, useLocation, } from "react-router-dom";
import { getIsLoggedIn } from '../../services/protected-router/protecetRouteSelectors';

interface IprotecedRoute {
  children: React.ReactNode,
  anonymous: boolean
}

const ProtectedRoute: React.FC<IprotecedRoute> = ({ children, anonymous = false }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  if (anonymous && isLoggedIn) {
    return (<Navigate to={from} />);
  }

  if (!anonymous && !isLoggedIn) {
    return (<Navigate to="/login" replace state={{ from: location }} />);
  }
  return <>{children}</> ;
}

export default ProtectedRoute;
