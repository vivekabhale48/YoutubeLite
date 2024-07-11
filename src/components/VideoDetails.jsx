import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [similarVideo, setSimilarVideo] = useState();
  const { setLoading, setMobileMenu } = useContext(Context);
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

  }

  return (
    <div className='flex absolute top-[60px] bottom-0 left-0 right-0'>
      <LeftNav/>
      <div className="flex-1">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default VideoDetails