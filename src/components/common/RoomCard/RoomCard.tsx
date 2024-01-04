import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Text } from "@components/common/Text";
import { Room } from "@store/features/rooms/types";
import { Chip, Divider, Grid, Stack, Tooltip } from "@mui/material";
import { DefaultButton } from "@components/Buttons";

interface RoomCardProps extends Room {
  handleBookingRoom?: (roomNumber: number) => void;
}

const RoomCard: React.FC<RoomCardProps> = ({
  roomNumber,
  roomPhotoUrl,
  roomType,
  capacityOfAdults,
  capacityOfChildren,
  roomAmenities,
  price,
  availability,
  handleBookingRoom,
}) => {
  const theme = useTheme();

  const roomAmenitiesComponents = roomAmenities.map((amenity, index) => {
    return (
      <Tooltip key={index} title={amenity.description}>
        <Chip
          label={amenity.name}
          size="small"
          sx={{
            color: "white",
            backgroundColor: theme.palette.text.secondary,
          }}
        />
      </Tooltip>
    );
  });

  return (
    <Card
      sx={{
        overflow: "hidden",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        position: "relative",
      }}>
      {!availability && (
        <Box
          position={"absolute"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            inset: 0,
            backgroundColor: theme.palette.action.disabled,
            zIndex: 1,
          }}>
          <Text
            type="light"
            fontWeight={700}
            fontSize="30px"
            text="RESEREVED"
            textAlign={"center"}></Text>
        </Box>
      )}

      <CardMedia
        component="img"
        sx={{ width: { xs: "100%", md: "30%" }, maxHeight: "277.5px" }}
        image={roomPhotoUrl}
        alt="Image not found"
      />

      <Box
        sx={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          gap: "30px",
        }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Grid container gap={"20px"}>
            <Grid
              item
              xs={"auto"}
              alignItems={"start"}
              justifyContent={"start"}>
              <Text
                type="primary"
                fontSize="15px"
                fontWeight={700}
                width="fit-content"
                text={`No. :`}
              />
              <Text
                type="primary"
                fontSize="15px"
                width="fit-content"
                fontWeight={700}
                text={`Price :`}
              />
              <Text
                type="primary"
                fontSize="15px"
                width="fit-content"
                fontWeight={700}
                text={`Capacity :`}
              />
              <Text
                type="primary"
                fontSize="15px"
                width="fit-content"
                fontWeight={700}
                text={`Type :`}
              />
            </Grid>

            <Grid item xs={6}>
              <Text
                type="primary"
                fontSize="15px"
                fontWeight={700}
                width="fit-content"
                text={`${roomNumber}`}
              />
              <Text
                type="secondary"
                fontSize="15px"
                width="fit-content"
                fontWeight={700}
                text={`${price}$`}
              />
              <Stack direction={"row"} gap={"5px"}>
                <Chip
                  variant="outlined"
                  size="small"
                  label={`${capacityOfAdults} Adults`}
                />
                <Chip
                  variant="outlined"
                  size="small"
                  label={`${capacityOfChildren} Children`}
                />
              </Stack>
              <Text
                type="secondary"
                fontSize="15px"
                width="fit-content"
                fontWeight={700}
                text={`${roomType}`}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Stack direction={{ xs: "column", md: "row" }} gap={"5px"}>
                <Text
                  type="primary"
                  fontSize="15px"
                  width="fit-content"
                  fontWeight={700}
                  text={`Aminites :`}
                />
                {roomAmenitiesComponents}
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <DefaultButton
                handleOnClick={(event: any) =>
                  handleBookingRoom && handleBookingRoom(roomNumber)
                }
                loadingPosition="center"
                variant="contained"
                type="submit">
                Book Room
              </DefaultButton>
            </Grid>
          </Grid>
        </CardContent>
      </Box>
    </Card>
  );
};

export default RoomCard;
