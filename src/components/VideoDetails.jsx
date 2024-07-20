import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [similarVideo, setSimilarVideo] = useState();
  const { loading, setLoading, setMobileMenu } = useContext(Context);
  const params = useParams();
  const id = params.videoId;
  useEffect(()=>{
    getVideoDetails();
    fetchSimilarVideo();
  }, [id])

  const getVideoDetails = async() => {
    setLoading(true);
    const fetchedData = await fetchDataFromApi(`video/details/?id=${id}`);
    console.log(fetchedData);
    setVideo(fetchedData);
    setLoading(false);
  }

  const fetchSimilarVideo = async() => {
    setLoading(true);
    const fetchSimilarVideoData = await fetchDataFromApi(`video/related-contents/?id=${id}`);
    console.log(fetchSimilarVideoData);
    setSimilarVideo(fetchSimilarVideoData);
    setLoading(false);
    // console.log(similarVideo);
  }

  return (
    <div className='flex absolute top-[60px] bottom-0 left-0 right-0'>
      <div className="flex-1 ml-6 pt-6 pr-6">
        <div className="h-[483px]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="pt-6 pr-6 max-w-[402px]">
        <div className="flex flex-col">
          {
            !loading && similarVideo && similarVideo.contents.map((content) =>{
              if(content?.type !== 'video') return false;
              return (
                <VideoCard
                  key={content?.video?.videoId}
                  video={content?.video}
                  type={'videoDetailsPage'}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default VideoDetails