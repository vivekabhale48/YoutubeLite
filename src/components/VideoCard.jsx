import React from 'react'
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from '../shared/VideoLength';

const VideoCard = ({video, type}) => {
  console.log(type)
  return (
    <Link to={`video/${video?.videoId}`}>
      <div className={`${type === 'videoDetailsPage' ? 'flex mb-3' : ''}`}>
        <div className={`${type === 'videoDetailsPage' ? 'min-w-[168px] h-[94px] md:rounded-xl overflow-hidden relative' : 'h-48 md:h-40 md:rounded-xl overflow-hidden relative'}`}>
          <img 
          className='w-full h-full object-cover'
          src={video?.thumbnails?.[0]?.url}/>
          {
            video?.lengthSeconds && (
              <VideoLength time={video?.lengthSeconds}/>
            )
          }
        </div>
        <div className={`${type === 'videoDetailsPage' ? 'flex' : 'flex mt-3'}`}>
          {
            type !== 'videoDetailsPage' && (
              <div className='flex items-start'>
                <div className='flex w-9 h-9 rounded-full overflow-hidden'>
                  <img className='w-full h-full object-cover' src={video?.author?.avatar[0]?.url} />
                </div>
              </div>
            )
          }
          <div className='flex flex-col ml-3 overflow-hidden'>
            <span className={`${type === 'videoDetailsPage' ? 'text-sm font-bold line-clamp2-css' : 'text-sm font-bold line-camp-2'}`}>
              {video?.title}
            </span>
            <div className='text-[12px] font-semibold text-white/[0.7] flex items-center mt-2'>
              {video?.author?.title}
              {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1'/>
              )}
            </div>
            <div className='text-[12px] font-semibold text-white/[0.7] flex items-center mt-1'>
              {
                video?.stats?.views && (
                  <>
                    <span>{`${abbreviateNumber(video?.stats?.views)} views`}</span>
                    <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-8px] mx-1">
                      .
                    </span>
                  </>
                )
              }
              <span className="truncate">
                {video?.publishedTimeText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard;