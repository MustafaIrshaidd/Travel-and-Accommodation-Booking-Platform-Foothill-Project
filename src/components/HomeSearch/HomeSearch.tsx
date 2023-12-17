import { DefaultButton } from "@components/Buttons";
import { Stack } from "@mui/material";
import React from "react";

const HomeSearch = () => {
  return (
    <Stack direction={"column"}>
      <DefaultButton
        text="hello"
        disableRipple={true}
        boxShadow={"none"}
        variant="outlined"
        caption="Where in the world ?"
        alignItems={"start"}></DefaultButton>
    </Stack>
  );
};

export default HomeSearch;
