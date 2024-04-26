import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { colors } from "../../constants/colors";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const VideoCard = ({ videos }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={`/videoDetails/${videos?.id?.videoId}`}>
        <CardMedia
          image={videos?.snippet?.thumbnails?.high?.url}
          alt={videos?.snoppet?.title}
          sx={{
            width: { xs: "100%", sm: "360px", md: "320px" },
            height: "180px",
          }}
        />
      </Link>

      <CardContent
        sx={{
          backgroundColor: colors.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <Link to={`/videoDetails/${videos?.id?.videoId}`}>
          <Typography my={"5px"} sx={{ opacity: ".4" }}>
            {moment(videos?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {videos?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: ".7" }}>
            {videos?.snippet?.description.slice(0, 70)}
          </Typography>
        </Link>
        <Link to={`/channel/${videos?.snippet?.channelId}`}>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={videos?.snippet?.thumbnails?.high?.url} />
            <Typography variant="subtitle2" color={"gray"}>
              {videos?.snippet?.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "15px" }}
              />
            </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
