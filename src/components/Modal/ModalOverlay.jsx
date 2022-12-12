import PropTypes from 'prop-types';
const ModalOverlay = (props) => {
    return (
        <div className="modal-overlay" >
            
            {props.children}
        </div>

    );
};
ModalOverlay.propTypes = {
    children: PropTypes.element.isRequired
};
export default ModalOverlay; 