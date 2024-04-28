import React, { useContext } from 'react'
import LeftNav from './LeftNav';
import { Context } from '../context/contextApi';
import VideoCard from './VideoCard';

const Feed = () => {
  const { loading, searchResults } = useContext(Context);
  return (
    <div className='flex absolute top-[60px] bottom-0 left-0 right-0'>
      <LeftNav />
      <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
          {
          !loading && searchResults && searchResults.map((content)=>{
              if(content.type !== 'video') return false;
              console.log(content);
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