import * as React from "react";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, Stack, useTheme } from "@mui/material";
import { Searchbar } from "@components/Searchbar";
import { Text } from "@components/Text";
import {
  NavAppBar,
  NavToolbar,
  NavAnimatedContainer,
  NavAnimatedItem,
  NavMenu,
  NavMenuItem,
  NavDivider,
} from "./styles";
import { HomeSearch } from "@components/HomeSearch";

const Navbar = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isAnimationActivated, setIsAnimationActivated] = React.useState(true);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
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
    <Stack direction={"column"} position={"sticky"} top={0}>
      <NavAppBar position="static">
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
                textShadow={true}
              />
            </NavAnimatedItem>
            <NavAnimatedItem isActivated={isAnimationActivated} isTop={true}>
              <HomeSearch></HomeSearch>
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
      <NavDivider isActivated={isAnimationActivated} />
    </Stack>
  );
};

export default Navbar;
