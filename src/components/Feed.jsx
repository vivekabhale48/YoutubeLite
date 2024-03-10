import React from 'react'
import LeftNav from './LeftNav';

const Feed = () => {
  return (
    <div className='flex'>
      <LeftNav />
      <div className='grow h-full overflow-y-auto'>

      </div>
    </div>
  )
}

export default Feed;