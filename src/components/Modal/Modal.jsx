import ReactDOM from "react-dom";
import { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import ModalOverlay from "./ModalOverlay";
const Backdrop = (props) => {
    return <div className='modal-backdrop' onClick={props.onClose}></div>;
};
Backdrop.propTypes = {
    onClose: PropTypes.func.isRequired
};


const modalRoot = document.getElementById("react-modals");
const Modal = (props) => {
    const { children, onClose } = props;

    useEffect(() => {

        function HandleEsc(e) {
            e.key === 'Escape' && onClose();
        };
        document.addEventListener('keydown', HandleEsc);
        return () => {
            document.removeEventListener('keydown', HandleEsc)
        };


    }, [onClose]);

    return (ReactDOM.createPortal(
        <>
            <Backdrop onClose={onClose} />
            <ModalOverlay onClose={onClose} >{children}</ModalOverlay>
        </>,
        modalRoot
    ));

}
Modal.propTypes = {
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired
}
export default Modal;
