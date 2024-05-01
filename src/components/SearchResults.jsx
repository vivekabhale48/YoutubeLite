import React, { useContext } from 'react'
import LeftNav from './LeftNav';
import { Context } from '../context/contextApi';
import SearchResultsVideoCard from './SearchResultsVideoCard';

const SearchResults = () => {

  const {loading, searchResults} = useContext(Context);
  return (
    <div className='flex absolute top-[60px] bottom-0 left-0 right-0'>
      <LeftNav />
      <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto px-6 pt-0 pb-4'>
        {
          !loading && searchResults && searchResults.map((content)=>{
            console.log(content);
            if(content?.type !== 'video') return false;
            return (
              <SearchResultsVideoCard 
              key={content?.video?.videoId}
              video={content.video} />
            )
          })
        }
      </div>
    </div>
  )
}

export default SearchResults;