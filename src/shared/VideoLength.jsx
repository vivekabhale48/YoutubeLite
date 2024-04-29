import React from 'react'
import moment from 'moment';

const VideoLength = ({time}) => {

    const VideoFormat = moment()?.startOf('day')?.seconds(time)?.format('H:mm:ss');
    return (
        <div className='absolute bottom-2 right-2 text-xs bg-black text-white py-1 px-2 rounded-md'>{VideoFormat}</div>
    )
}

export default VideoLength;