
import { useEffect } from "react";
import styles from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const ModalOverlay: React.FC<{ clickHandler: () => void }> = ({ clickHandler }) => {
    return <div className={styles.overlay} onClick={clickHandler}></div>;
};

export const Modal: React.FC<{ modalClose: () => void, header?: string, children: React.ReactNode }> = ({ modalClose, children, header }) => {


    useEffect(() => {
        function handleEsc(e: KeyboardEvent | React.KeyboardEvent) {
            e.key === 'Escape' && modalClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc)
        };
    }, []);

    return (
        <>
            <ModalOverlay clickHandler={modalClose} />
            <div className={styles.backdrop} >
                <div className={`${styles.closeIcon} mr-10  mt-10`}>
                
                    <CloseIcon  type="primary" onClick={modalClose}/>
                </div>
                {children}
            </div>
        </>
    );

}



