import { Box, Stack } from "@mui/material";
import React from "react";
import ChannalCard from "./ChannalCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos , direction }) => {
  if(!videos?.length) return "loading....";
  return (
    <Stack
    direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {
        videos.map((video, idx) => (
            <Box key={idx}>
              {video.id.channelId && <ChannalCard channelDetail={video} />}
              {video.id.videoId && <VideoCard video={video} />}
            </Box>
        )
        )
      }
    </Stack>
  );
};

export default Videos;
