import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import { Loader, Videos } from "../";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState([]);
  const [relatedVideo, setRelatedVideo] = useState([]);

  useEffect(() => {
    ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
      .catch((err) => err);

    ApiService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((relData) => setRelatedVideo(relData.items))
      .catch((err) => err);
  }, [id]);

  if (!videoDetail.snippet) return <Loader />;
  if (!relatedVideo.length) return <Loader />;

  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box width={{ xs: "100%", md: "75%" }}>
          <ReactPlayer
            url={`https://youtube.com/watch?v=${id}`}
            className="reactPlayer"
            controls
          />
          {videoDetail?.snippet?.tags.map((item, idx) => (
            <Chip
              label={item}
              key={idx}
              sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" }}
              deleteIcon={<Tag />}
              onDelete={() => {}}
              variant="outlined"
            />
          ))}
          <Typography variant="h5" fontWeight={"bold"} p={2}>
            {videoDetail.snippet.title}
          </Typography>
          <Typography variant="subtitle2" p={2} sx={{ opacity: ".6" }}>
            {videoDetail.snippet.description}
          </Typography>
          <Stack
            direction={"row"}
            gap={"20px"}
            alignItems={"center"}
            py={1}
            px={2}
          >
            <Stack
              direction={"row"}
              gap={"3px"}
              alignItems={"center"}
              sx={{ opacity: ".7" }}
            >
              <Visibility />
              {parseInt(
                videoDetail?.statistics?.viewCount
              ).toLocaleString()}{" "}
              views
            </Stack>
            <Stack
              direction={"row"}
              gap={"3px"}
              alignItems={"center"}
              sx={{ opacity: ".7" }}
            >
              <FavoriteOutlined />
              {parseInt(
                videoDetail?.statistics?.likeCount
              ).toLocaleString()}{" "}
              likes
            </Stack>
            <Stack
              direction={"row"}
              gap={"3px"}
              alignItems={"center"}
              sx={{ opacity: ".7" }}
            >
              <MarkChatRead />
              {parseInt(
                videoDetail?.statistics?.commentCount
              ).toLocaleString()}{" "}
              comments
            </Stack>
          </Stack>
          <Stack direction={"row"} py={1} px={2}>
            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={"5px"}
                mt={"5px"}
              >
                <Avatar
                  src={videoDetail.snippet.thumbnails.default.url}
                  alt={videoDetail.snippet.channelTitle}
                />
                <Typography variant="subtitle2" color={"gray"}>
                  {videoDetail.snippet.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Box>
        <Box
          width={{ xs: "100%", md: "25%" }}
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"scroll"}
          maxHeight={"180vh"}
        >
          <Videos videos={relatedVideo} />
        </Box>
      </Box>
    </Box>
  );
};

export default VideoDetail;
