import { Link, useMatch } from "react-router-dom"
import PropTypes from 'prop-types';
export const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to);
    return (
        <Link 
        to ={to} 
        {...props}
        style={{
            color: match ? 'white' : 'var(--text-inactive-color)'
        }}
        >
            {children}
        </Link>
    )
}
CustomLink.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    props: PropTypes.object
};