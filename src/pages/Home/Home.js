import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import { fetchProducts } from '../../services/productSlice/productSlice';


const Home = () => {
    const dispatch=useDispatch();
    const {data,status}= useSelector((state)=>state.products);
   

    useEffect(()=>{

        dispatch(fetchProducts());


    },[dispatch]);

    
    if(status==='LOADING')
    return (
        <main className='h-screen'><Spinner></Spinner></main>
    )
    return (
        <main> 
            
            
            <div className="py-10 flex  justify-center">

            <div className="grid grid-cols-4 gap-x-[50px] gap-y-[50px] ">
            {data.map(data=><Card key={data.id} data={data}></Card>)}
            </div>
            </div>
            

            

        </main>
    );
};

export default Home;