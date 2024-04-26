import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Channel, VideoDetail, Navbar, Search } from "../";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/search/:id" element={<Search />}></Route>
        <Route path="/videoDetails/:id" element={<VideoDetail />}></Route>
        <Route path="/channel/:id" element={<Channel />}></Route>
      </Routes>
    </Box>
  );
};

export default App;
