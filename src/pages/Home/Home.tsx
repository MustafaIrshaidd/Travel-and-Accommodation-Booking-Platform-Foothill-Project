import React from "react";
import { Navbar } from "@components/Navbar";
import { Box, Container, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeroSection from "./components/HeroSection";

const Home = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.background.default }}>
        <Container sx={{ minWidth: "80%" }}>
          <Navbar />
          <HeroSection />
        </Container>
      </Box>
    </>
  );
};

export default Home;
