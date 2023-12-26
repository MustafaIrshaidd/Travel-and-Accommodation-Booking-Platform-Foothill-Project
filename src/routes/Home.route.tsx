import { Navbar } from "@components/common/Navbar";
import { Box, Container, useTheme } from "@mui/material";
import { Home } from "@pages/Home";
import { Search } from "@pages/Search";
import { Route, Routes } from "react-router-dom";

const HomeRoute = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </Box>
  );
};

export default HomeRoute;
