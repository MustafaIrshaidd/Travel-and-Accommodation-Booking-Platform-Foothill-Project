import * as React from "react";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Divider, Drawer, Stack, styled, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  NavAppBar,
  NavToolbar,
  NavMenu,
  NavMenuItem,
  NavAnimatedContainer,
  NavAnimatedItem,
} from "./styles";
import { HomeSearch } from "@components/HomeSearch";
import ClearIcon from "@mui/icons-material/Clear";
import { Text } from "@components/Text";

const SearchButton = styled(IconButton)<{ isRotating?: boolean }>(
  ({ theme, isRotating = false }) => ({
    transform: isRotating
      ? "translateY(0px) rotate(360deg)"
      : "translateY(0) rotate(0deg)",
    transition: "transform 0.5s ease-in-out",
    padding: "0",
  })
);

export const SearchDrawer = styled(Box)<{ isOpen?: boolean }>(
  ({ theme, isOpen = false }) => ({
    transition: "0.5s height ease-in-out",
    height: isOpen ? "fit-content" : "0",
    padding: isOpen?"30px":"0",
    overflow: "hidden",
    backgroundColor: theme.palette.background.default,
  })
);

const Navbar = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isAnimationActivated, setIsAnimationActivated] = React.useState(true);
  const [isRotating, setIsRotating] = React.useState(false);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSearchBarOpen = () => {
    setIsRotating(!isRotating);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0
        ? setIsAnimationActivated(false)
        : setIsAnimationActivated(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Stack direction={"column"} position={"sticky"} zIndex={10} top={0}>
      <NavAppBar isOpen={isRotating} position="static">
        <NavToolbar>
          {/* Logo */}
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          {/* Animated Container */}
          <NavAnimatedContainer isActivated={isAnimationActivated}>
            <NavAnimatedItem isActivated={isAnimationActivated} isTop={false}>
              <Text
                type="secondary"
                letterSpacing={2}
                text="Search Any Hotel You Like"
                fontWeight={700}
                fontSize="16px"
                textShadow={true}
              />
            </NavAnimatedItem>
            <NavAnimatedItem isActivated={isAnimationActivated} isTop={true}>
              <Box justifyContent={"center"}>
                <SearchButton
                  onClick={handleSearchBarOpen}
                  isRotating={isRotating}
                  color="inherit">
                  {isRotating ? <ClearIcon /> : <SearchIcon />}
                </SearchButton>
              </Box>
            </NavAnimatedItem>
          </NavAnimatedContainer>

          {/* Menu */}
          <IconButton
            disableRipple={true}
            size="large"
            sx={{ boxShadow: 1, borderRadius: "30px", paddingX: 2, gap: 1 }}
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit">
            <MenuIcon sx={{ fontSize: "20px" }} />
            <AccountCircle />
          </IconButton>
          <NavMenu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <NavMenuItem onClick={handleClose}>Profile</NavMenuItem>
            <NavMenuItem onClick={handleClose}>My account</NavMenuItem>
            <Divider sx={{ marginY: "0px" }} />
            <NavMenuItem onClick={handleClose}>Logout</NavMenuItem>
          </NavMenu>
        </NavToolbar>
      </NavAppBar>
      <SearchDrawer isOpen={isRotating}>
        <HomeSearch isOpen={isRotating}></HomeSearch>
      </SearchDrawer>
      <Divider />
    </Stack>
  );
};

export default Navbar;
