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
      <HeroSection />
      <TrendingDestinations />
      <FeaturedDeals />
      <RecentlyVisited />
    </>
  );
};

export default Home;
