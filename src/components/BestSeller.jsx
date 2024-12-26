import React, { useContext, useEffect,useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';


const BestSeller = () => {

    const {products} = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])

    useEffect(()=>{
        const bestProducts = products.filter((item)=>(item.bestseller))
        setBestSeller(bestProducts.slice(0,5))
    },[])

  return (
    <div className='my-10'>
        <div className='text-center text-3x1 py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md-text-base text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem expedita ea corporis dicta mollitia, laudantium libero enim optio odit voluptatum, eligendi pariatur officiis maiores fuga consectetur dolor neque accusamus laborum?
            </p>
        </div>
        
        <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
        

    </div>
  )
}

export default BestSeller