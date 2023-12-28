import React, { useState } from "react";
import {
  Button,
  useTheme,
  styled,
  Stack,
  Grid,
  TextField,
  Box,
  Collapse,
} from "@mui/material";
import { Text } from "@components/common/Text";
import { DatePicker } from "@components/inputs/DatePicker";
import dayjs from "dayjs";
import { useFormik } from "formik";
import { DefaultButton } from "@components/Buttons";
import SearchIcon from "@mui/icons-material/Search";
import { NumberInput } from "@components/inputs/NumberInput";
import { searchHotelsAsync } from "@store/features/search/searchThunks";
import { useAppDispatch } from "@hooks/redux.hook";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const InputsInformationArray = [
  {
    id: "city",
    text: "City",
    placeholder: "Search destinations",
    isDisabled: false,
  },
  { id: "who", text: "Who", placeholder: "Add guests", isDisabled: true },
  {
    id: "checkInDate",
    text: "Check in",
    placeholder: dayjs().toString(),
    isDisabled: true,
  },
  {
    id: "checkOutDate",
    text: "Check out",
    placeholder: dayjs().toString(),
    isDisabled: true,
  },
];

const CustomSearchInputs = styled(Button)<{ isActive?: boolean }>(
  ({ theme, isActive = false }) => ({
    position: "relative",
    borderRadius: 0,
    textTransform: "none",
    padding: "0 10px 0 20px",
    height: "70px",
    border: "none",
    width: "100%",
    boxShadow: isActive ? theme.shadows[2] : "none",
    variant: "outlined",
    backgroundColor: isActive
      ? theme.palette.background.default
      : theme.palette.background.paper,
    alignItems: "start",
    "&:hover": () => {
      if (isActive)
        return {
          boxShadow: theme.shadows[2],
          borderColor: theme.palette.text.primary,
        };
      else {
        return {
          backgroundColor: theme.palette.background.paper,
          boxShadow: "none",
          borderColor: theme.palette.text.primary,
        };
      }
    },
  })
);

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& ::placeholder": { fontSize: "15px", color: theme.palette.secondary.main },
  transition: "none",
  "& :before": { borderBottomStyle: "unset !important" },
  "& :hover:before": { borderBottom: "none" },
}));

const InputDrawer = styled(Box)<{ isOpen: boolean }>(
  ({ theme, isOpen = false }) => ({
    position: "static",
    top: "100%",
    left: 0,
    width: "100%",
    height: isOpen ? "min-height" : "0px",
    overflow: isOpen ? "visible" : "hidden",
    transition: "height 0.3s ease-in-out",
    backgroundColor: theme.palette.background.paper,
    color: "inherit",
    padding: isOpen ? "0" : "0",
    zIndex: theme.zIndex.drawer,
  })
);

interface HomeSearchProps {
  isOpen?: boolean;
}

export interface HomeSearchFormValues {
  checkInDate: string;
  checkOutDate: string;
  numberOfRooms: number;
  children: number;
  adults: number;
  city?: string;
  starRate?: number;
}

const HomeSearch: React.FC<HomeSearchProps> = ({ isOpen = false }) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const [activeInputIndex, setActiveInputIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const handleInputActivation = (index: number) => {
    setActiveInputIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleSubmitClick = () => {
    formik.handleSubmit();
  };

  const formik = useFormik<HomeSearchFormValues>({
    initialValues: {
      checkInDate: dayjs().format("YYYY-MM-DD"),
      checkOutDate: dayjs().add(1, "day").format("YYYY-MM-DD"),
      numberOfRooms: 1,
      children: 0,
      adults: 2,
    },
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const resultAction = await dispatch(searchHotelsAsync(values));
        const originalPromiseResult = unwrapResult(resultAction);
        console.log(originalPromiseResult);
        navigate("/home/search");
        setIsLoading(false);
      } catch (rejectedValueOrSerializedError: any) {}
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
      <Stack
        padding={"20px"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"80%"}
        margin={"auto"}>
        <Grid
          container
          justifyContent={"space-between"}
          gap={"10px"}
          onClick={(e) => e.preventDefault()}>
          <Grid key={1} item xs={12} md={5.9}>
            <CustomSearchInputs
              disableRipple
              isActive={1 === activeInputIndex}
              onClick={() => handleInputActivation(1)}>
              <Stack
                direction="column"
                alignItems="start"
                justifyContent="center"
                height="100%"
                width="100%">
                <Text type="primary" text={"City"} fontSize="13px" />
                <CustomTextField
                  id={"city"}
                  name={"city"}
                  value={formik.values["city"]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  fullWidth={false}
                  disabled={false}
                  variant="standard"
                  placeholder={"Search destinations"}
                  size="small"
                />
              </Stack>
            </CustomSearchInputs>
            <Collapse in={1 === activeInputIndex} timeout="auto" unmountOnExit>
              <Box></Box>
            </Collapse>
          </Grid>
          <Grid key={2} item xs={12} md={5.9}>
            <CustomSearchInputs
              disableRipple
              isActive={2 === activeInputIndex}
              onClick={() => handleInputActivation(2)}>
              <Stack
                direction="column"
                alignItems="start"
                justifyContent="center"
                height="100%"
                width="100%">
                <Text type="primary" text={"Who"} fontSize="13px" />
                <CustomTextField
                  id={"who"}
                  name={"who"}
                  value={""}
                  fullWidth={false}
                  disabled={true}
                  variant="standard"
                  placeholder={"Add Details"}
                  size="small"
                />
              </Stack>
            </CustomSearchInputs>
            <Collapse in={2 === activeInputIndex} timeout="auto" unmountOnExit>
              <Stack
                direction={"column"}
                justifyContent={"center"}
                alignItems={"start"}
                padding={"20px"}
                gap={"10px"}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  width={{ xs: "100%", lg: "50%" }}
                  margin={"auto"}>
                  <Text
                    type="secondary"
                    textAlign="start"
                    width="100%"
                    text="Rooms"
                  />
                  <NumberInput
                    onChange={(value) =>
                      formik.setFieldValue("numberOfRooms", value)
                    }
                    initialValue={1}
                    minValue={1}
                    maxValue={10}
                  />
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  width={{ xs: "100%", lg: "50%" }}
                  margin={"auto"}>
                  <Text
                    type="secondary"
                    textAlign="start"
                    width="100%"
                    text="Adults"
                  />
                  <NumberInput
                    onChange={(value) => formik.setFieldValue("adults", value)}
                    initialValue={2}
                    minValue={2}
                    maxValue={10}
                  />
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  width={{ xs: "100%", lg: "50%" }}
                  margin={"auto"}>
                  <Text
                    type="secondary"
                    textAlign="start"
                    width="100%"
                    text="Children"
                  />
                  <NumberInput
                    onChange={(value) => {
                      console.log("hello");
                      formik.setFieldValue("children", value);
                    }}
                    initialValue={0}
                    minValue={0}
                    maxValue={5}
                  />
                </Stack>
              </Stack>
            </Collapse>
          </Grid>

          <Grid key={3} item xs={12} md={5.9}>
            <CustomSearchInputs
              disableRipple
              isActive={3 === activeInputIndex}
              onClick={() => handleInputActivation(3)}>
              <Stack
                direction="column"
                alignItems="start"
                justifyContent="center"
                height="100%"
                width="100%">
                <Text type="primary" text={"Check in"} fontSize="13px" />
                <CustomTextField
                  id={"checkInDate"}
                  name={"checkInDate"}
                  value={formik.values.checkInDate}
                  fullWidth={false}
                  disabled={true}
                  variant="standard"
                  placeholder={"Search destinations"}
                  size="small"
                />
              </Stack>
            </CustomSearchInputs>
            <Collapse in={3 === activeInputIndex} timeout="auto" unmountOnExit>
              <DatePicker
                onDateChange={(date) => {
                  formik.setFieldValue("checkInDate", date);
                  dayjs(date).isAfter(dayjs(formik.values.checkOutDate)) &&
                    formik.setFieldValue(
                      "checkOutDate",
                      dayjs(date).add(1, "d").format("YYYY-MM-DD")
                    );
                }}
                value={dayjs(formik.values.checkInDate)}
                dateFormat="YYYY-MM-DD"
              />
            </Collapse>
          </Grid>

          <Grid key={4} item xs={12} md={5.9}>
            <CustomSearchInputs
              disableRipple
              isActive={4 === activeInputIndex}
              onClick={() => handleInputActivation(4)}>
              <Stack
                direction="column"
                alignItems="start"
                justifyContent="center"
                height="100%"
                width="100%">
                <Text type="primary" text={"Check out"} fontSize="13px" />
                <CustomTextField
                  id={"checkOutDate"}
                  name={"checkOutDate"}
                  value={formik.values.checkOutDate}
                  fullWidth={false}
                  disabled={true}
                  variant="standard"
                  placeholder={"Search destinations"}
                  size="small"
                />
              </Stack>
            </CustomSearchInputs>
            <Collapse in={4 === activeInputIndex} timeout="auto" unmountOnExit>
              <DatePicker
                onDateChange={(date) => {
                  formik.setFieldValue("checkOutDate", date);
                }}
                minDate={dayjs(formik.values.checkInDate)}
                value={dayjs(formik.values.checkOutDate)}
                dateFormat="YYYY-MM-DD"
              />
            </Collapse>
          </Grid>

          <DefaultButton
            isLoading={isLoading}
            isDisabled={isLoading || !formik.isValid}
            loadingPosition="center"
            variant="contained"
            startIcon={<SearchIcon />}
            type="submit"
            handleOnClick={handleSubmitClick}>
            Search Hotels
          </DefaultButton>
        </Grid>
      </Stack>
    </form>
  );
};

export default HomeSearch;
