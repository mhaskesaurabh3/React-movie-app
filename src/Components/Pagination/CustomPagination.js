import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Pagination.css";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ffff",
    },
  },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Stack spacing={2}>
          <Pagination
            color="primary"
            onChange={(e) => handleChange(e.target.textContent)}
            count={numOfPages}
          />
        </Stack>
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
