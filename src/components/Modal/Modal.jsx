import ReactDOM from "react-dom";
import { useEffect } from "react";
import styles from './modal.module.css';
import PropTypes from 'prop-types';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";



const ModalOverlay = (props) => {
        return <div className={styles.overlay} onClick={props.onClick}></div>;
    };


const Modal = (props) => {

    const modalClose = props.modalClose
    


    useEffect(() => {
        function HandleEsc(e) {
            e.key === 'Escape' && modalClose();
        };
        document.addEventListener('keydown', HandleEsc);
        return () => {
            document.removeEventListener('keydown', HandleEsc)
        };
    }, []);

    return (
        <>
            <ModalOverlay onClick={modalClose}/>
            <div className={styles.backdrop} >
                <div className={`${styles.icon} mt-10 mr-10`}>
                    <CloseIcon type="primary" onClick={modalClose} />
                </div>
                {props.children}
            </div>

        </>
    );

}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
}
ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default Modal;
