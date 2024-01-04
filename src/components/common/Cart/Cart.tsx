import { useAppSelector } from "@hooks/redux.hook";
import {
  Badge,
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  useTheme,
} from "@mui/material";
import {
  selectCheckoutRooms,
  selectHotelRoomsById,
} from "@store/features/rooms/selectors";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { selectHotelDetails } from "@store/features/hotels/selectors";
import { Text } from "@components/common/Text";
import { DefaultButton } from "@components/Buttons";

type Anchor = "top" | "left" | "bottom" | "right";

const Cart: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const roomsSelector = useAppSelector(selectHotelRoomsById);
  const checkoutRoomsSelector = useAppSelector(selectCheckoutRooms);
  const hotelDetailsSelector = useAppSelector(selectHotelDetails);

  const cartData = roomsSelector.data.filter((room) => {
    return checkoutRoomsSelector.data.includes(room.roomNumber);
  });

  const totalPrice = cartData.reduce((sum, room) => sum + room.price, 0);

  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  return (
    <div>
      <React.Fragment key={"right"}>
        <Tooltip title={"Cart"}>
          <Box
            onClick={toggleDrawer("right", true)}
            position={"fixed"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            top={"20vh"}
            right={"0"}
            sx={{
              backgroundColor: theme.palette.background.paper,
              width: "75px",
              height: "75px",
              boxShadow: theme.shadows[9],
              "&:hover": { cursor: "pointer" },
            }}
            borderRadius={"25px 0 0 25px"}
            zIndex={99}>
            <Badge
              badgeContent={checkoutRoomsSelector.data.length}
              color="success">
              <MenuBookIcon color="action" />
            </Badge>
          </Box>
        </Tooltip>

        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}>
          <IconButton
            sx={{
              display: { lg: "none" },
              margin: 1,
              position: "absolute",
              top: { xs: "20px" },
              right: { xs: "20px" },
            }}
            onClick={toggleDrawer("right", false)}>
            <CloseIcon />
          </IconButton>
          <Box
            sx={{ backgroundColor: theme.palette.background.default }}
            width={{ xs: "100vw", lg: "30vw" }}
            height={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}>
            <Stack width={"100%"} gap={4}>
              <Text
                fontSize="25px"
                fontWeight={700}
                type={"secondary"}
                textAlign={"center"}
                text={`${hotelDetailsSelector.data.hotelName}`}
              />
              <Box>
                {cartData.map((room) => {
                  return (
                    <Grid
                      container
                      direction={"row"}
                      gap={3}
                      justifyContent={"center"}>
                      <Grid item xs={5} md={3} lg={5}>
                        <Text
                          fontSize="15px"
                          type={"primary"}
                          text={`1x ${room.roomType}`}
                          textAlign={"start"}
                          width="100%"
                        />
                      </Grid>
                      <Grid item>
                        <Text
                          fontSize="15px"
                          type={"primary"}
                          text={`-`}
                          textAlign={"start"}
                          width="100%"
                        />
                      </Grid>
                      <Grid item>
                        <Text
                          fontSize="15px"
                          type={"secondary"}
                          text={`${room.price}$`}
                          textAlign={"center"}
                          width="100%"
                        />
                      </Grid>
                    </Grid>
                  );
                })}
              </Box>

              <Divider sx={{ width: "75%", margin: "auto" }}></Divider>
              <Stack direction={"row"} justifyContent={"center"} gap={3}>
                <Text
                  fontSize="17px"
                  type={"primary"}
                  text={`Total Price :`}
                  fontWeight={700}
                  textAlign={"center"}
                  width="fit-content"
                />
                <Text
                  fontSize="17px"
                  fontWeight={700}
                  type={"secondary"}
                  text={`${totalPrice} $`}
                  textAlign={"center"}
                  width="fit-content"
                />
              </Stack>

              <Stack alignItems={"center"}>
                <DefaultButton
                  handleOnClick={(event: any) => navigate("/user/checkout")}
                  loadingPosition="center"
                  variant="contained"
                  type="submit"
                  width="75%">
                  Checkout
                </DefaultButton>
              </Stack>
            </Stack>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Cart;
