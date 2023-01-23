import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../Store/CartSlice';

const NewItem = ({ data }) => {

    const dispatch = useDispatch();

    const increaseHandler = () => {
        dispatch(cartActions.addItemToCart({
            itemID: data.itemID,
            name: data.name,
            price: data.price,
        }))
    }

    const decreaseHandler = () => {
        dispatch(cartActions.removeItemFromCart(data.itemID));
    }

    return <div className="newitem">
        <p>{data.name}</p>
        <p>{data.quantity}</p>
        <div className="buttons">
            <button onClick={decreaseHandler}>-</button>
            <button onClick={increaseHandler}>+</button>
        </div>
    </div>
}

const Cart = () => {
    const data = useSelector(state => state.cart.items);
    return (
        (<div className='cart'>
            <h3>Your Shopping Cart</h3>
            {data.map(item => <NewItem key={item.itemID} data={item} />)}
        </div>)
    );
}
export default Cart;
