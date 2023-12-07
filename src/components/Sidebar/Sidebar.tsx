import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Avatar, Popper, Stack } from "@mui/material";
import { AppBar, Drawer, DrawerHeader } from "./styles";
import NavigationItems from "./components/NavigationItems";
import { SidebarProps } from "./types";
import { ThemeSwitch } from "@components/Buttons";
import ProfileMenu from "./components/ProfileMenu";

const Sidebar: React.FC<SidebarProps> = ({
  username,
  drawerOpened = false,
}) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(drawerOpened);

  const [openPoper, setOpenPopper] = React.useState(false);
  const [userPoperEL, setUserPoperEL] = React.useState<null | HTMLElement>(
    null
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setOpenPopper(false);
  };

  const handleUserPopperClick = (event: React.MouseEvent<HTMLElement>) => {
    setUserPoperEL(event.currentTarget);
    setOpenPopper((previousOpen) => !previousOpen);
  };

  const canBeOpen = openPoper && Boolean(userPoperEL);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <>
      <AppBar position="fixed" open={open} aria-label={"header"}>
        <Toolbar>
          <IconButton
            color="default"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}>
            <MenuIcon />
          </IconButton>
          <Stack
            width={"100%"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"end"}
              gap={1}>
              <Typography
                color={theme.palette.text.primary}
                variant="h6"
                noWrap
                component="div">
                Hotels
              </Typography>
              <Typography
                color={theme.palette.text.secondary}
                variant="caption"
                noWrap
                component="div">
                Powered By Foothill
              </Typography>
            </Stack>
            <ThemeSwitch />
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Stack
          display="flex"
          direction={"column"}
          justifyContent={"space-between"}
          minHeight={"100vh"}>
          <Box>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose} aria-label="close drawer">
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <NavigationItems open={open}></NavigationItems>
            <Divider />
          </Box>

          <Box display={"block"}>
            <Divider />
            <Box
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                p: 1.3,
                position: "relative",
              }}>
              <Box
                sx={{
                  minWidth: 0,
                  mr: open ? 1.3 : "auto",
                  justifyContent: "center",
                  display: "inline-block",
                }}>
                <Avatar alt={username} src="/static/images/avatar/3.jpg" />
              </Box>
              <Box display={"inline-block"} width={"170px"}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  width={"100%"}>
                  <Typography component={"span"} sx={{ opacity: open ? 1 : 0 }}>
                    {username}
                  </Typography>
                  <IconButton
                    onClick={handleUserPopperClick}
                    color="inherit"
                    edge="start"
                    sx={{
                      marginLeft: "auto",
                    }}>
                    <MoreHorizOutlinedIcon />
                  </IconButton>
                  <Popper
                    id={id}
                    open={openPoper}
                    anchorEl={userPoperEL}
                    transition
                    style={{ zIndex: theme.zIndex.drawer + 2 }}>
                    {({ TransitionProps }) => (
                      <ProfileMenu transitionProps={TransitionProps} />
                    )}
                  </Popper>
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
};

export default Sidebar;
