import React from 'react'
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

const VideoCard = ({video}) => {
    console.log(video)

  return (
    <Link to={`video/${video?.videoId}`}>
      <div className='h-48 md:h-40 md:rounded-xl overflow-hidden'>
        <img 
        className='w-full h-full object-cover'
        src={video?.thumbnails?.[0]?.url}/>
      </div>
    </Link>
  )
}

export default VideoCard;