import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../Store/CartSlice';


const data = [
    { itemID: crypto.randomUUID(), name: "Dell XPS 13", price: 1000 },
    { itemID: crypto.randomUUID(), name: "Apple MacBook Pro", price: 2000 },
    { itemID: crypto.randomUUID(), name: "HP Legion", price: 3000 }
]


const Item = (props) => {

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            itemID: props.data.itemID,
            name: props.data.name,
            price: props.data.price,
        }))
    }

    return <div className="item">
        <p>{props.data.name}</p>
        <button onClick={addToCartHandler}>Add To Cart</button>
    </div>
}


const Lists = () => {
    return (
        <div className='items'>
            <h1>Buy Your Fav Products</h1>
            {data.map(item => <Item key={item.itemID} data={item} />)}

        </div>
    );
}

export default Lists;
