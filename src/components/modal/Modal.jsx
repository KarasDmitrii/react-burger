
import { useEffect } from "react";
import styles from './modal.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
        return <div className={styles.overlay} onClick={props.onClick}></div>;
    };

export const Modal = (props) => {
    const modalClose = props.modalClose

    useEffect(() => {
        function handleEsc(e) {
            e.key === 'Escape' && modalClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc)
        };
    }, []);

    return (
        <>
            <ModalOverlay onClick={modalClose}/>
            <div className={styles.backdrop} >
                
                {props.children}
            </div>
        </>
    );

}

Modal.propTypes = {
    modalClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
}
ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired,
}


