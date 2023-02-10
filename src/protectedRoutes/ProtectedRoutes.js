import PropTypes from 'prop-types';
import { useSelector } from "react-redux"
import { Navigate, useLocation, } from "react-router-dom";

export default function ProtectedRoute({ children, anonymous = false }) {
    const isLoggedIn = useSelector((store) => store.user.activeUser);
  
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if (anonymous && isLoggedIn) {
      return <Navigate to={ from } />;
    }
  
    if (!anonymous && !isLoggedIn) {
      return <Navigate to="/login" replace state={{ from: location}}/>;
    }
    return children;
  }

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    anonymous: PropTypes.bool
};
