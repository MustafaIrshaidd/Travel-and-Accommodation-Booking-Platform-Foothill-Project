import { Navbar } from "@components/Navbar";
import { Box, Container, useTheme } from "@mui/material";
import { Home } from "@pages/Home";
import { Search } from "@pages/Search";
import { Route, Routes } from "react-router-dom";

const HomeRoute = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Container sx={{ minWidth: "80%" }}>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </Container>
    </Box>
  );
};

export default HomeRoute;
