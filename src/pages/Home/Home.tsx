import React from "react";
import { Navbar } from "@components/Navbar";
import { Box, Container, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import FeaturedDeals from "./components/FeaturedDeals";
import { HotelCard } from "@components/HotelCard";
import { Slider } from "@components/Slider";
import TrendingDestinations from "./components/TrendingDestinations";
import RecentlyVisited from "./components/RecentlyVisited";

const Home = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.background.default }}>
        <Container sx={{ minWidth: "80%" }}>
          <Navbar />
          <HeroSection />
          <TrendingDestinations />
          <FeaturedDeals />
          <RecentlyVisited />
        </Container>
      </Box>
    </>
  );
};

export default Home;
