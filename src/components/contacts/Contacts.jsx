import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div>
      <Button>
        <Link to={"/"}>MAIN</Link>
      </Button>
    </div>
  );
};

export default Contacts;
