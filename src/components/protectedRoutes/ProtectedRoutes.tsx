import { Navigate, useLocation, } from "react-router-dom";
import { getIsAuthChecked, getIsLoggedIn } from '../../services/protected-router/protecetRouteSelectors';
import { useAppSelector, useDispatch } from "../../hooks/hooks";
import { Preloader } from "../preloader/Preloader";
import { useEffect } from "react";
import { checkUserAuth } from "../../services/user/UserAction";


interface IprotecedRoute {
  children: React.ReactNode,
  anonymous: boolean
}


const ProtectedRoute: React.FC<IprotecedRoute> = ({ children, anonymous = false }) => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const isAutnChecked = useAppSelector(getIsAuthChecked)
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserAuth())
  }, [])

  if (!isAutnChecked) {
    
    return (<Preloader/>);
  }

  if (anonymous && isLoggedIn) {
    return (<Navigate to={from} />);
  }

  if (!anonymous && !isLoggedIn) {
    return (<Navigate to="/login" replace state={{ from: location }} />);
  }
  return <>{children}</> ;
}

export default ProtectedRoute;
