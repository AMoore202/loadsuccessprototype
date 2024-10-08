import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface StyledSelectProps {
  children: React.ReactNode;
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  label: string;
}

function StyledSelect({ children, value, onChange, label }: StyledSelectProps) {
  return (
    <FormControl fullWidth variant="filled" className="customSelect">
      <InputLabel
        id="dropdown-label"
        sx={{
          color: "#B3B3B3",
          "&.Mui-focused": {
            color: "#B3B3B3",
          },
        }}
      >
        {label}
      </InputLabel>
      <Select
        labelId="dropdown-label"
        value={value}
        onChange={onChange}
        label={label}
        disableUnderline
        sx={{
          backgroundColor: "#1A1A1A",
          borderRadius: "8px",
          color: "#CBCBCB",
          ".MuiSvgIcon-root": {
            color: "#B3B3B3",
          },
          "& .MuiSelect-select": {
            color: "#CBCBCB",
          },
          "& .MuiMenuItem-root": {
            color: "#CBCBCB",
          },
          "&.customSelect .MuiFilledInput-root": {
            // Not working
            backgroundColor: "#000000",
            "&.Mui-focused": {
              backgroundColor: "#000000",
            },
            "&:hover": {
              backgroundColor: "#000000",
            },
          },
        }}
      >
        {children}
      </Select>
    </FormControl>
  );
}

interface SelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}

export function ExceptionSelect({ value, onChange }: SelectProps) {
  return (
    <StyledSelect value={value} onChange={onChange} label="Exception">
      <MenuItem value={"wrongContainerCategory"}>
        Wrong ULD/Cart - Category
      </MenuItem>
      <MenuItem value={"wrongContainerDestination"}>
        Wrong ULD/Cart - Destination
      </MenuItem>
      <MenuItem value={"containerFullCount"}>ULD/Cart Full - Count</MenuItem>
      <MenuItem value={"containerFullWeight"}>ULD/Cart Full - Weight</MenuItem>
      <MenuItem value={"containerClosed"}>ULD/Cart Closed</MenuItem>
      <MenuItem value={"wrongFlight"}>Wrong Flight</MenuItem>
      <MenuItem value={"flightCancelled"}>Flight Cancelled</MenuItem>
      <MenuItem value={"flightClosed"}>Flight Closed</MenuItem>
      <MenuItem value={"inactive"}>Inactive</MenuItem>
      <MenuItem value={"standby"}>Standby</MenuItem>
      <MenuItem value={"notAuthorized"}>Not Authorized</MenuItem>
      <MenuItem value={"screeningRequired"}>Screening Required</MenuItem>
      <MenuItem value={"stoppedBag"}>Stopped Bag</MenuItem>
      <MenuItem value={"flaggedBag"}>Flagged Bag</MenuItem>
      <MenuItem value={"hazmat"}>Hazmat</MenuItem>
    </StyledSelect>
  );
}

export function SuccessSoundSelect({ value, onChange }: SelectProps) {
  return (
    <StyledSelect value={value} onChange={onChange} label="Success Sound">
      <MenuItem value={"old"}>Current Beep</MenuItem>
      <MenuItem value={"new1"}>New Beep #1</MenuItem>
      <MenuItem value={"new2"}>New Beep #2</MenuItem>
    </StyledSelect>
  );
}
