import styles from './BurgerConstructor.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from 'react-redux';
import { MOVE_CARD } from '../../services/Constructor/ConstructorActions';
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react'

export const ConstructorCard = ({ elem, index, handleDelete }) => {
    const dispatch = useDispatch();
    const ref = useRef(null)
    const id = elem.key;
    const [{ isDragging }, drag] = useDrag({
        type: 'card',
        item: () => {
            return { id, index }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [{ handlerId }, drop] = useDrop({
        accept: 'card',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            dispatch({
                type: MOVE_CARD,
                dragIndex: dragIndex,
                hoverIndex: hoverIndex
            })
            item.index = hoverIndex
        },
    })
    drag(drop(ref))
    const opacity = isDragging ? 0 : 1;
    return (
        <div ref={ref} className={`m-2 ${styles.mains}`} style={{ opacity }} data-handler-id={handlerId} >
            <DragIcon type="primary" />
            <ConstructorElement
                text={elem.item.name}
                price={elem.item.price}
                thumbnail={elem.item.image}
                handleClose={() => handleDelete(elem.key)}
            />

        </div>
    )
}