import { abbreviateNumber } from 'js-abbreviation-number'
import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const SearchResultsVideoCard = ({ video }) => {
    return (
        <div className='search-results-page grid mb-4 gap-x-4'>
            <div className='max-w-[500px] w-[100%] max-h-[280px]'>
                <img className='h-full w-full object-cover rounded-[16px]' src={video?.thumbnails[0]?.url} alt="" />
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <span className='text-[18px] max-sm:line-clamp-2'>{video?.title}</span>
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
                <div className='flex items-center py-3 gap-x-2'>
                    <div className='flex w-6 h-6 rounded-full overflow-hidden'>
                        <img className='w-full h-full object-cover' src={video?.author?.avatar[0]?.url} />
                    </div>
                    <div>
                        <div className='text-[12px] font-semibold text-white/[0.7] flex items-center'>
                            {video?.author?.title}
                            {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                                <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1' />
                            )}
                        </div>
                    </div>
                </div>
                <div className='text-[12px] max-sm:line-clamp-2'>
                    {
                        video?.descriptionSnippet
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchResultsVideoCard