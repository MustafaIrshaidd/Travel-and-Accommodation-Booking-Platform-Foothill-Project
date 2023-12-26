import React, { useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Stack, useTheme, styled } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const StyledDateCalendar = styled(DateCalendar)(({ theme }) => ({
  ".MuiDateCalendar-root": {
    color: theme.palette.text.primary,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "white",
    border: "1px solid",
    backgroundColor: theme.palette.background.default,
  },
}));

interface DatePickerProps {
  onDateChange?: (formattedDate: string | null) => void;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  value?: Dayjs;
  dateFormat?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  onDateChange,
  minDate = dayjs(),
  maxDate = dayjs().add(5, "year"),
  value = dayjs(),
  dateFormat = "YYYY-MM-DD",
}) => {
  const theme = useTheme();
  const [dateValue, setDateValue] = React.useState(value);

  const handleDateChange = (selectedDate: Dayjs | null) => {
    console.log("Selected date:", selectedDate);
    selectedDate && setDateValue(selectedDate);
    if (onDateChange) {
      const formattedDate = selectedDate
        ? selectedDate.format(dateFormat)
        : null;
      onDateChange(formattedDate);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <StyledDateCalendar
          value={dateValue}
          minDate={minDate}
          maxDate={maxDate}
          disablePast
          onChange={(date: any) => handleDateChange(date)}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default DatePicker;
