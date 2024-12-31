import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import ProductItem from './Productitem';

const Title = ({ text1, text2 }) => {
    return (
        <h1 className='font-bold'>
            {text1} <span className='text-gray-500'>{text2}</span>
        </h1>
    );
};

const Bestseller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestproduct = products.filter((item) => item.bestseller);
        setBestSeller(bestproduct.slice(0, 5));
    }, [products]);

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    This is the best clothes shopping website
                </p>
            </div>
            <div className='flex flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-center lg:space-x-4 space-y-4 lg:space-y-0'>
                {bestSeller.map((item) => (
                    <ProductItem
                        key={item._id}
                        id={item._id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        className="w-full sm:w-1/2 lg:w-auto" // Adjust width for different screen sizes
                    />
                ))}
            </div>
        </div>
    );
};

export default Bestseller;
