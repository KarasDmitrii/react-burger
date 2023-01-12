import ReactDOM from "react-dom";
import { useEffect } from "react";
import styles from './Modal.module.css';
import PropTypes from 'prop-types';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { CLOSE_ING_MODAL } from "../../services/IngredientDetails/IngredientDetailsActions";
import { CLOSE_ORDER_MODAL } from "../../services/Order/OrderActions";
// const ModalOverlay = () => {
//     return <div className={styles.backdrop} onClick={modalClose}></div>;
// };

const modalRoot = document.getElementById("react-modals");
const Modal = (props) => {
    const dispatch = useDispatch();
    
    const modalClose = () => {
        dispatch({
            type: CLOSE_ING_MODAL
        })
        dispatch({
            type: CLOSE_ORDER_MODAL
        })
        
    }

    useEffect(() => {

        function HandleEsc(e) {
            e.key === 'Escape' && modalClose();
        };
        document.addEventListener('keydown', HandleEsc);
        return () => {
            document.removeEventListener('keydown', HandleEsc)
        };
    }, []);

    return (ReactDOM.createPortal(
        <>
            <div className={styles.backdrop} onClick={modalClose}></div>

            <div className={styles.overlay} onClose={modalClose} >
                <div className={`${styles.icon} mt-10 mr-10`}>
                    <CloseIcon type="primary" onClick={modalClose} />
                </div>                
                {props.children} 
            </div>

        </>,
        modalRoot
    ));

}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
}

export default Modal;
