import React from "react";
import { Navbar } from "@components/Navbar";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box height={"200vh"}></Box>
    </>
  );
};

export default Home;
