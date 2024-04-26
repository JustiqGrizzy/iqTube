import { Box, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../constants/index";
import { colors } from "../../constants/colors";
import SearchBar from "../searchBar/SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        backgroundColor: colors.primary,
      }}
    >
      <Link to={"/"}>
        <img src={logo} alt="logotip" height={50} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
