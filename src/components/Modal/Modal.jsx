import ReactDOM from "react-dom";
import { useEffect } from "react";
import styles from './Modal.module.css';
import PropTypes from 'prop-types';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const ModalOverlay = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose}></div>;
};
ModalOverlay.propTypes = {
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
            <ModalOverlay onClose={onClose} />

            <div className={styles.overlay} onClose={onClose} >
                <div className={`${styles.icon} mt-10 mr-10`}>
                    <CloseIcon type="primary" onClick={onClose} />
                </div>
                {children}
            </div>

        </>,
        modalRoot
    ));

}
Modal.propTypes = {
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired
}
export default Modal;
