import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = () => {
    const {data}= useSelector((state)=>state.cart);
    return (
        <div  className='flex justify-between bg-[#333333] p-8 items-center'><Link to='/'>
            <h1  className='text-[#FFFFFF] font-bold text-2xl'>SZ SMART <span className='text-[rgb(228,83,0)]'>SHOP</span></h1></Link>

            <div className="text-[#ffffff] font-bold text-xl">
                <ul className='flex gap-6'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} /> <sup className='bg-[#f07524] rounded-xl p-1 text-xs'>{data.length}</sup></Link></li>
                    
                </ul></div>
            
        </div>
    );
};

export default Nav;