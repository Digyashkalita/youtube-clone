import React from "react";
import { Stack, Box } from "@mui/material";
import { ChanelCard, VideoCard } from "./";

const Videos = ({ videos }) => {
  return console.log(videos);
  // <Stack direction="row" flexWrap="wrap" justifyContent="start" dap={2}>
  //   {videos.map((item, idx) => (
  //     <Box key={idx}>
  //       {item.id.videoId && <VideoCard video={item} />}
  //       {item.id.channelId && <ChanelCard chanelDetail={item} />}
  //     </Box>
  //   ))}
  // </Stack>
};

export default Videos;
