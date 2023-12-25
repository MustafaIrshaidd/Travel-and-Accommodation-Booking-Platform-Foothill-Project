import { useTheme } from "@mui/material";
import HeroSection from "./components/HeroSection";
import FeaturedDeals from "./components/FeaturedDeals";
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
