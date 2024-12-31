import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import Title from './Title';
import ProductItem from './Productitem';

const Latestcollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        // Only update state if products is defined and is an array
        if (products && products.length > 0) {
            setLatestProducts(products.slice(0, 10));
        }
    }, [products]); // Adding `products` as a dependency

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1="Latest" text2="Collections" />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700'>
                    Hey There! Let's check this out
                </p>
            </div>

            {/* Rendering products */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.map((item, index) => (
                    <ProductItem 
                        key={item.id || index} 
                        id={item.id} 
                        image={item.image} 
                        name={item.name} 
                        price={item.price} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Latestcollection;
