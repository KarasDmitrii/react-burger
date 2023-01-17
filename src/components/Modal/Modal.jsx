import ReactDOM from "react-dom";
import { useEffect } from "react";
import styles from './Modal.module.css';
import PropTypes from 'prop-types';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const ModalOverlay = (props) => {
    return <div className={styles.overlay} onClick={props.onClick}></div>;
};


const modalRoot = document.getElementById("react-modals");
const Modal = (props) => {
    
    useEffect(() => {
        function handleEsc(e) {
            e.key === 'Escape' && props.modalClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc)
        };
    }, [props]);

    return (ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={props.modalClose}/>
            <div className={styles.backdrop}  >
                <div className={`${styles.icon} mt-10 mr-10`}>
                    <CloseIcon type="primary" onClick={props.modalClose} />
                </div>                
                {props.children} 
            </div>
        </>,
        modalRoot
    ));

}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    modalClose: PropTypes.func.isRequired
}
ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Modal;
