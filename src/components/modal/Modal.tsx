
import { useEffect } from "react";
import styles from './modal.module.css';

const ModalOverlay: React.FC<{clickHandler: () => void}> = ({clickHandler}) => {
        return <div className={styles.overlay} onClick={clickHandler}></div>;
    };

export const Modal: React.FC<{modalClose: () => void, children: React.ReactNode}> = ({modalClose, children}) => {
    

    useEffect(() => {
        function handleEsc(e:  KeyboardEvent | React.KeyboardEvent) {
            e.key === 'Escape' && modalClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc)
        };
    }, []);

    return (
        <>
            <ModalOverlay clickHandler={modalClose}/>
            <div className={styles.backdrop} >
                
                {children}
            </div>
        </>
    );

}



