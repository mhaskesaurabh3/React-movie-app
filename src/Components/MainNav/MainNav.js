import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import "./MainNav.css";
import { useNavigate } from "react-router-dom";

const MainNav = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/series");
    else if (value === 3) navigate("/search");
  }, [value, navigate]);

  return (
    <>
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className="bottomnav"
        >
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Trending"
            icon={<WhatshotIcon />}
            onClick={() => {
              window.scroll(0, 0);
            }}
          />
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Movies"
            icon={<MovieIcon />}
            onClick={() => {
              window.scroll(0, 0);
            }}
          />
          <BottomNavigationAction
            style={{ color: "white" }}
            label="TV Series"
            icon={<LiveTvIcon />}
            onClick={() => {
              window.scroll(0, 0);
            }}
          />
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Search"
            icon={<SearchIcon />}
            onClick={() => {
              window.scroll(0, 0);
            }}
          />
        </BottomNavigation>
      </Box>
    </>
  );
};

export default MainNav;
