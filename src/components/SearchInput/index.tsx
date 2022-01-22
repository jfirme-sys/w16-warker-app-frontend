import React, { ChangeEventHandler, useContext, useState } from "react";
import { Box, IconButton, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ipDataContext } from "providers/ipDataProvider";
import Snackbar from "components/Snackbar";

const IP_REGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

const SearchInput: React.FC = () => {
  const { setIpAddress } = useContext(ipDataContext);
  const [inputValue, setInputValue] = useState<string>("");
  const [inputError, setInputError] = useState<boolean>(false);

  const handleChange = (event: any) => {
    const {
      target: { value }
    } = event

    setInputValue(value)
  }

  const validateIPaddress = (ipAddress: string) => {
    if (IP_REGEX.test(ipAddress)) {
      return (true)
    }
    return (false)
  }

  const onClickSearchButton = () => {
    if (!validateIPaddress(inputValue)) {
      setInputError(true)
    } else {
      setIpAddress(inputValue)
      setInputError(false);
    }
  }

  return (
    <Box data-testid="search-input-box" sx={{ display: "flex", alignItems: "center" }}>
      <OutlinedInput
        data-testid="search-input"
        sx={{
          background: "#fff",
          borderRadius: "14px 0 0 14px",
          width: "420px",
        }}
        placeholder="Search for any IP address"
        inputProps={{ "aria-label": "search ip address" }}
        onChange={handleChange}
      />
      <IconButton
        aria-label="search ip address"
        sx={{ p: 0 }}
        onClick={onClickSearchButton}
      >
        <Box
          sx={{
            p: "10px",
            background: "#000",
            height: "56px",
            borderRadius: " 0 14px 14px 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SearchIcon sx={{ fill: "#FFF" }} />
        </Box>
      </IconButton>
      <Snackbar
        message={"Invalid ip address"}
        onOpen={inputError}
        onClose={() => setInputError(false)}
        onClick={() => setInputError(false)}
      />
    </Box>
  );
};

export default SearchInput;
