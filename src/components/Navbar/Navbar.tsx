import * as React from "react";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Collapse, Divider, Stack, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { Text } from "@components/Text";
import {
  NavAppBar,
  NavToolbar,
  NavMenu,
  NavMenuItem,
  SearchButton,
} from "./styles";
import { HomeSearch } from "@components/HomeSearch";

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
    <Stack direction={"column"} position={"sticky"} zIndex={999} top={0}>
      <NavAppBar isOpen={isRotating} position="static">
        <NavToolbar>
          {/* Logo */}
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10px"}
            padding={"5px 10px"}
            borderRadius={"30px"}
            onClick={handleSearchBarOpen}
            sx={{
              backgroundColor: theme.palette.text.secondary,
              transition: "transform 0.3s ease-in-out",
              "&:hover": { cursor: "pointer", transform: "scale(0.9)" },
            }}>
            <SearchButton isRotating={isRotating}>
              {isRotating ? <ClearIcon /> : <SearchIcon />}
            </SearchButton>
            <Text
              type="light"
              letterSpacing={2}
              text="Search Any Hotel You Like"
              fontWeight={700}
              fontSize="12px"
              textShadow={true}
            />
          </Box>

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
      <Collapse
        sx={{ backgroundColor: theme.palette.background.default }}
        in={isRotating}
        timeout="auto"
        unmountOnExit>
        <HomeSearch isOpen={isRotating} />
      </Collapse>
      {/* <Divider /> */}
    </Stack>
  );
};

export default Navbar;
