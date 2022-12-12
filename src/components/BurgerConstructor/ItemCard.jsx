import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
const dataPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
});
const ItemCard = (props) => {
    return (
        props.ing.map((item) => {
            return (
                <div className="m-4 mains" key={item._id}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text={item.name}
                        price={item.price}
                        thumbnail={item.image}
                    />
                </div>
            )
        })
    )
}
ItemCard.propTypes = {
    ing: PropTypes.arrayOf(dataPropTypes).isRequired
};
export default ItemCard;