import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  Typography,
  useTheme,
} from "@mui/material";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import EmojiTransportationOutlinedIcon from "@mui/icons-material/EmojiTransportationOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import { NavigationItemsProps } from "../types";
import "../style.css"
import { useNavigate } from "react-router-dom";

const navItems = [
  ["Cities", <EmojiTransportationOutlinedIcon />],
  ["Hotels", <ApartmentOutlinedIcon />],
  ["Rooms", <DoorFrontOutlinedIcon />],
];

const NavigationItems: React.FC<NavigationItemsProps> = ({ open }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [itemActivated, setItemActivated] = React.useState<null | string>(null);
  const [sidePopoverDeclarationEL, setSidePopoverDeclarationEL] =
    React.useState<HTMLElement | null>(null);
  const [popoverText, setPopoverText] = React.useState<String>("");

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    const domElement = event.target as HTMLElement;

    const childElement = domElement?.querySelector("span");

    if (childElement) {
      const text = childElement.innerText;
      if (text) {
        setPopoverText(text);
      }
    } else {
      setPopoverText(domElement.innerText);
    }
    setSidePopoverDeclarationEL(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setSidePopoverDeclarationEL(null);
  };

  const handleSidebarItemActivation = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const domElement = event.target as HTMLElement;

    const listItems = document
      .querySelectorAll(".list-item")
      .forEach((item) => {
        item.classList.remove("active");
      });

    domElement.closest(".list-item")?.classList.add("active");

    const activatedItem = domElement
      .closest(".list-item")
      ?.querySelector("span")?.innerText;

    if (typeof activatedItem != "undefined") {
      setItemActivated(activatedItem);
      handleNavigate(activatedItem.toLowerCase());
    }
  };

  const handleNavigate = (navigationPath: string) => {
    navigate("/admin/" + navigationPath);
  };

  const openPopOver = Boolean(sidePopoverDeclarationEL);

  return (
    <>
      <CssBaseline />
      <List onClick={(e) => handleSidebarItemActivation(e)}>
        {navItems.map(([text, icon], index) => (
          <ListItem
            className={"list-item" + (text === "Cities" ? " active" : "")}
            key={index}
            disablePadding
            sx={{ display: "block" }}>
            <ListItemButton
              aria-owns={
                openPopOver && !open ? "mouse-over-popover" : undefined
              }
              aria-haspopup="true"
              onMouseEnter={(e) => !open && handlePopoverOpen(e)}
              onMouseLeave={(e) => !open && handlePopoverClose()}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}>
                {icon}
              </ListItemIcon>
              <ListItemText
                className="itemText"
                primary={text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={!open && openPopOver}
        anchorEl={sidePopoverDeclarationEL}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.default,
          },
        }}>
        <Typography sx={{ p: 1, color: theme.palette.text.primary }}>
          {popoverText}
        </Typography>
      </Popover>
    </>
  );
};

export default NavigationItems;
