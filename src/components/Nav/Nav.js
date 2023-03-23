import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
        <div  className='flex justify-between bg-[#333333] p-8'>
            <h1  className='text-[#FFFFFF] font-bold text-2xl'>SZ SMART <span className='text-[rgb(228,83,0)]'>SHOP</span></h1>

            <div className="text-[#ffffff] font-bold text-xl">
                <ul className='flex gap-6'>
                    <li><FontAwesomeIcon icon={faShoppingCart} /> <sup className='bg-[#f07524] rounded-xl p-1 text-xs'>100</sup></li>
                    
                </ul></div>
            
        </div>
    );
};

export default Nav;