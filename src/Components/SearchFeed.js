import React, { useEffect, useState } from "react";
import { Box,  Typography } from "@mui/material";

import { fetchApiData } from "../Utils/FetchFromApi";
import Videos from "./Videos";
import { useParams } from "react-router-dom";

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams()

  useEffect(() => {

    fetchApiData(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search Result for :  <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
        </Typography>

        <Videos videos={videos} />
      </Box>
  );
};

export default Feed;
