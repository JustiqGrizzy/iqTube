import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Box, Container } from "@mui/material";
import { ChannelCard, Videos } from "../";

const Channel = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    ApiService.fetching(`channels?part=snippet&id=${id}`)
      .then((details) => setChannelDetails(details.items[0]))
      .catch((err) => console.log(err));

    ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
      .then((data) => setVideos(data?.items))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Box minHeight={"95vh"} mt={"1vh"}>
      <Box
        width={"100%"}
        height={"200px"}
        zIndex={10}
        sx={{
          backgroundImage: `url(${channelDetails?.brandingSettings?.image?.bannerExternalUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          mb: "150px",
        }}
      >
        <ChannelCard videos={channelDetails} mt="100px" />
      </Box>
      <Container maxWidth={"90%"}>
        <Videos videos={videos} />
      </Container>
    </Box>
  );
};

export default Channel;
