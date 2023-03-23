import React from 'react';
import './Card.css'

const Card = ({data}) => {
    return (
        <div className=' border-2 rounded-[6px] max-w-[250px] h-[400px] relative'>
            <img className='cardimg' src={data.thumbnail} alt="" />
            <br />
            <div className="p-1"><h1 className='font-bold text-xl'>{data.title}</h1>
            <h1 className='font-semibold text-lg'>Price: ${data.price}</h1>
            <h1 className='font-normal text-base'>Stock: ${data.stock}</h1></div>
            <button className='bg-[#333333] w-[100%] text-white font-semibold rounded-b-[6px] p-2 absolute bottom-0'>Add to Cart</button>
            
        </div>
    );
};

export default Card;