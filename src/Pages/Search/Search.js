import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Tab, Tabs } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ffff",
    },
  },
});

const Search = () => {
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div style={{ display: "flex", margin: "15px 0" }}>
          <TextField
            style={{ flex: 1 }}
            className="searchbox"
            label="Search"
            variant="filled"
            color="primary"
          />
          <Button variant="contained" style={{ marginLeft: 10 }}>
            <SearchIcon />
          </Button>
        </div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(newValue) => {
            setType(newValue);
          }}
        >
          <Tab style={{ width: "50%" }} label="Search Movies"></Tab>
          <Tab style={{ width: "50%" }} label="Search Web Series"></Tab>
        </Tabs>
      </ThemeProvider>
    </>
  );
};

export default Search;
