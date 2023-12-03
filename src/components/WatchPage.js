import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    },[]);

    return (
        <>
            <div className='flex w-full  flex-col justify-center my-8'>
                <div className='px-5 flex justify-center max-sm:px-2'>
                    <iframe 
                        className='w-[90%] h-[650px] max-sm:w-[100%] max-sm:h-[300px] max-md:h-[400px]'
                        width="1000" 
                        height="500" 
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div>
                    <CommentsContainer/>
                </div>
            </div>
            
        </>
        
    )
}

export default WatchPage;