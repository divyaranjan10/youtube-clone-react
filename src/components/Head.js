import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
// import store from '../utils/store';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

    const[searchQuery, setSearchQuery] = useState("");
    const[suggestions, setSuggestions] = useState([]);
    const[showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();

    /**
     * searchCache = {
     *         iphone: ["iphone 10", "iphone 11", "iphone 14"];
     * }
     * 
     * searchQuery = "iphone"
     * 
     */

    useEffect(() => {

        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
            }
            else{
                getSearchSuggestions();
            }
        
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    },[searchQuery]);

    const getSearchSuggestions = async() => {
        console.log("API call - " + searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);

        //if we donn't find the results in the cache -> then -> update cache results
        dispatch(
            cacheResults({
                [searchQuery] : json[1],
            })
        );
    };


    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-flow-col p-4 shadow-lg sticky top-0 bg-white'>
            <div className='flex col-span-1'>
                <img 
                    onClick={() => toggleMenuHandler()}
                    className='h-8 cursor-pointer'
                    alt='toggle-menu'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png'
                />
                <a href='/' className='max-sm:hidden'>
                    <img className='h-8 mx-2'
                        alt='youtube-logo'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png'
                    />
                </a>
            </div>
            <div className='relative col-span-10 px-10'>
                <div className='flex justify-center '>
                    <input 
                        className='px-2 w-1/2 border border-gray-400 p-2 rounded-l-full' 
                        type='text'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button className='border border-gray-400 px-4 py-2 rounded-r-full bg-gray-100'>🔍</button>
                </div>
                {showSuggestions && (
                    <div className='absolute bg-white py-2 px-3 w-[100%] shadow-lg rounded-lg border border-gray-100'>
                        <ul>
                            {suggestions.map((suggestionsList) => (
                                <li key={suggestionsList} className='py-2 px-3 hover:bg-gray-100'>
                                    {suggestionsList}
                                </li>
                            ))}
                        </ul>
                </div>
                )}
                
            </div>
            <div className='col-span-1'>
                <img
                    className='h-8'
                    alt='user-icon'
                    src='https://cdn-icons-png.flaticon.com/512/552/552721.png'
                />
            </div>
        </div>
    )
}

export default Head;