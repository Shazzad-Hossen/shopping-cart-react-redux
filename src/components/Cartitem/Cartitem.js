import React from 'react';
import './Cartitem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../services/cartSlice/cartSlice';

const Cartitem = ({data}) => {

    const dispatch= useDispatch();
    return (
        <div className='bg-white p-4 border-b-2 flex justify-between px-8 items-center'>
            <div className=" flex gap-10 items-center">
            <img className='cartImg' src={data.thumbnail} alt="" />
            <div className=" font-bold text-xl max-w-[300px] text-left">{data.title}</div>
            </div>
            <div className=" flex gap-8"><p>${data.price}</p> <FontAwesomeIcon onClick={()=>dispatch(removeProduct(data.id))} className='text-[red] h-[20px]' icon={faTrash} /></div>

            
        </div>
    );
};

export default Cartitem;