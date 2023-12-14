import React from "react";
import {
  Divider,
  Paper,
  Stack,
  IconButton,
  useTheme,
  Fade,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { Cookie } from "@mui/icons-material";
import { useCookies } from "react-cookie";

const ProfileMenuItems = [["Logout", <LogoutIcon />]];

const ProfileMenu: React.FC<any> = ({ transitionProps }) => {
 
  const theme = useTheme();
  const navigate = useNavigate();

  const handleButtonsClick = (event: React.MouseEvent) => {
    if (event.target instanceof HTMLButtonElement) {
      switch (event.target.innerText) {
        case "Logout": {
          console.log("hello")
          break;
        }
      }
    }
  };

  return (
    <Fade {...transitionProps} timeout={350}>
      <Paper
        sx={{
          backgroundColor: theme.palette.background.default,
        }}>
        <Stack
          display={"flex"}
          direction={"column"}
          justifyContent={"end"}
          onClick={handleButtonsClick}>
          {ProfileMenuItems.map((item, index) => {
            return (
              <React.Fragment>
                <IconButton
                  key={index}
                  value={`${item[0]}`}
                  color="inherit"
                  sx={{
                    width: "100%",
                    fontSize: "1rem",
                    marginLeft: "auto",
                    borderRadius: 0,
                    display: "flex",
                    justifyContent: "start",
                    gap: "4px",
                  }}>
                  {item[1]}
                  {item[0]}
                </IconButton>
                <Divider />
              </React.Fragment>
            );
          })}
        </Stack>
      </Paper>
    </Fade>
  );
};

export default ProfileMenu;
