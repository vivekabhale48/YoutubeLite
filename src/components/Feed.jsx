import React, { useContext, useEffect } from 'react'
import LeftNav from './LeftNav';
import { Context } from '../context/contextApi';
import VideoCard from './VideoCard';

const Feed = () => {
  const { mobileMenu, setMobileMenu, loading, searchResults } = useContext(Context);

  return (
    <div className='flex absolute top-[60px] bottom-0 left-0 right-0'>
      <LeftNav />
      {
        mobileMenu && (
          <div className={`background-opaque absolute top-0 bottom-0 left-0 right-0 z-[1] bg-[rgba(0,0,0,.5)]`} onClick={()=> setMobileMenu(false)} ></div>
        )
      }
      <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
          {
          !loading && searchResults && searchResults.map((content)=>{
              if(content.type !== 'video') return false;
              return(
                <VideoCard 
                key={content?.video?.videoId}
                video={content?.video}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Feed;