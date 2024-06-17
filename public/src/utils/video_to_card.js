import React from "react";
import Card from "../components/Card"; // Import your Card component
import {video_fetch} from "../utils/video_fetch";

export const fetchAndRenderCards = async () => {
    const videos = await video_fetch();
    return renderCards(videos);
  };

 function renderCards(videos) {
  return videos.map((video, index) => (
    <Card
      id={video.id}
      title={video.title}
      thumbnail={video.thumbnail}
      creatorID={video.creatorID}
    />
  ));
}



