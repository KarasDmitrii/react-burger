import { Navigate, useLocation, } from "react-router-dom";
import { getIsLoggedIn } from '../../services/protected-router/protecetRouteSelectors';
import { useAppSelector } from "../../hooks/hooks";

interface IprotecedRoute {
  children: React.ReactNode,
  anonymous: boolean
}

const ProtectedRoute: React.FC<IprotecedRoute> = ({ children, anonymous = false }) => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);

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
