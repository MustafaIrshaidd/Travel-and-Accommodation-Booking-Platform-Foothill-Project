import React from "react";
import { DefaultButton } from "@components/Buttons";
import { Text } from "@components/Text";
import { Divider, Stack, TextField, useTheme } from "@mui/material";


const HomeSearch = () => {
  const theme = useTheme()
  const [selected ,setSelected] = React.useState(0);

  const handleOnClick = (label: string,event?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    switch(label){
      case "search":{
        console.log("search")
        break;
      }
      case "checkin":{
        console.log("checkin")
        break;
      }
      case "checkout":{
        console.log("checkout")
        break;
      }
      case "guests":{
        console.log("guests")
        break;
      }
    }
  }
  return (
    <Stack direction={"row"} borderRadius={"50px"} boxShadow={theme.shadows[4]} alignItems="center">
      <DefaultButton
        handleOnClick={(e) => handleOnClick("search", e)}
        borderRadius="50px 0 0 50px"
        padding="0 10px 0 20px"
        height="70px"
        border="none"
        disableRipple={true}
        boxShadow={"none"}
        variant="outlined"
        alignItems={"start"}>
        <Stack direction={"column"} alignItems={"start"} justifyContent={"center"} height={"70px"}>
          <Text type="primary" text="Who" fontSize={"13px"} />
          <TextField variant="standard" placeholder={"Search destinations"} size="small" InputLabelProps={{ sx: { animation: "none" } }} InputProps={{
            sx: {
              "& ::placeholder": { fontSize: "15px" },
              transition: "none",
              "&:before": { borderBottom: "none" }, "&:hover:before": { borderBottom: "none" }
            }
          }} />
        </Stack>
      </DefaultButton>
      <Divider orientation="vertical" flexItem />
      <DefaultButton
        handleOnClick={(e) => handleOnClick("checkin", e)}
        height="70px"
        border="none"
        disableRipple={true}
        boxShadow={"none"}
        variant="outlined"
        alignItems={"center"}
        justifyContent={"center"}>
        <Stack direction={"column"} alignItems={"start"} justifyContent={"center"} height={"100%"} width={"100%"}>
          <Text type="primary" text="Check in" fontSize={"13px"} />
          <Text type="secondary" text="Add dates" fontSize={"15px"} padding="5px 0 0 0" />
        </Stack>
      </DefaultButton>
      <Divider orientation="vertical" flexItem />
      <DefaultButton
        handleOnClick={(e) => handleOnClick("checkout", e)}
        height="70px"
        border="none"
        disableRipple={true}
        boxShadow={"none"}
        variant="outlined">
        <Stack direction={"column"} alignItems={"start"} justifyContent={"center"} height={"100%"} width={"100%"}>
          <Text type="primary" text="Check out" fontSize={"13px"} />
          <Text type="secondary" text="Add dates" fontSize={"15px"} padding="5px 0 0 0" />
        </Stack>
      </DefaultButton>
      <Divider orientation="vertical" flexItem />
      <DefaultButton
        handleOnClick={(e) => handleOnClick("guests", e)}
        borderRadius="0 50px 50px 0 "
        padding="0 20px 0 10px"
        height="70px"
        border="none"
        disableRipple={true}
        boxShadow={"none"}
        variant="outlined">
        <Stack direction={"column"} alignItems={"start"} justifyContent={"center"} height={"100%"} width={"100%"}>
          <Text type="primary" text="Who" fontSize={"13px"} />
          <Text type="secondary" text="Add guests" fontSize={"15px"} padding="5px 0 0 0" />
        </Stack>
      </DefaultButton>

    </Stack>
  );
};

export default HomeSearch;
