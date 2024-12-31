import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const location = useLocation();
    const [visible,setVisible] = useState(false);

    useEffect(()=>{
        if(location.pathname.includes('collection') && showSearch){
            setVisible(true);
        }else{
            setVisible(false)
        }
    },[location])

    return showSearch && visible ? (
        <div className="flex justify-center items-center my-5">
            <div className="inline-flex items-center border border-gray-400 px-5 py-2 rounded-full w-3/4 sm:w-1/2">
                <input 
                    className="flex-1 outline-none bg-inherit text-sm"  
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    type="text" 
                    placeholder="Search"
                />
                <img className="w-4" src={assets.search_icon} alt="Search icon" />
            </div>
            <img 
                onClick={() => setShowSearch(false)} 
                src={assets.cross_icon} 
                className="w-4 h-4 ml-3 cursor-pointer" 
                alt="Close icon"
            />
        </div>
    ) : null;
}

export default SearchBar;
