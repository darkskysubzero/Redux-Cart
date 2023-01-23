import React from 'react';
import { uiActions } from '../Store/UiSlice';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {


    const dispatch = useDispatch();
    const cartQuantity = useSelector(state => state.cart.totalQuantity);

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    }


    return (
        <div className='header'>
            <h1>Redux Cart</h1>
            <p onClick={toggleCartHandler}>My Cart <span>{cartQuantity}</span></p>
        </div>
    );
}

export default Header;
