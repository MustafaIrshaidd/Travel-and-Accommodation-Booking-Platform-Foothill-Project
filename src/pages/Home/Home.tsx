import React from "react";
import { Navbar } from "@components/Navbar";
import { Box, Divider, Stack } from "@mui/material";

const Home = () => {
  return (
    <>
      <Stack direction={"column"}>
        <Navbar />
        <Box height={"200vh"}></Box>
      </Stack>
    </>
  );
};

export default Home;
