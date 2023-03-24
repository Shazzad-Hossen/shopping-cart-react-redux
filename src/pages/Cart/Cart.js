import React from 'react';
import { useSelector } from 'react-redux';
import Cartitem from '../../components/Cartitem/Cartitem';
import {v4} from 'uuid'

const Cart = () => {
    const {data,tPrice}= useSelector((state)=>state.cart);
    
    return (
        <menu>

        {data.map(data=><Cartitem key={v4()} data={data}></Cartitem>)}

            <p className='bg-[#ffd7a2] text-end p-6 font-semibold' >Total Items : {data.length} <br />Total Price : ${tPrice}</p>

        </menu>
    );
};

export default Cart;