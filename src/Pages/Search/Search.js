import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Tab, Tabs } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SingleContent from "../../Components/SingleContent/SingleContent";
import "./Search.css";
import axios from "axios";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ffff",
    },
  },
});

const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [numOfPages, setNumOfPages] = useState();

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${
        type ? "tv" : "movie"
      }?api_key=1d203e3a6ccbb77dd4d9d548b01f565f&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchSearch();
  }, [type, page]);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div
          style={{
            display: "flex",
            margin: "15px 0",
          }}
        >
          <TextField
            style={{ flex: 1 }}
            className="searchbox"
            label="Search"
            variant="filled"
            color="primary"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            variant="contained"
            style={{ marginLeft: 10 }}
            onClick={fetchSearch}
          >
            <SearchIcon />
          </Button>
        </div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{ paddingBottom: 5, justifyContent: "center" }}
        >
          <Tab style={{ width: "100%" }} label="Search Movies"></Tab>
          <Tab style={{ width: "100%" }} label="Search Web Series"></Tab>
        </Tabs>
      </ThemeProvider>
      <div className="trending">
        {content &&
          content.map((elem) => {
            return (
              <SingleContent
                key={elem.id}
                id={elem.id}
                poster={elem.poster_path || elem.backdrop_path}
                title={elem.title || elem.name}
                date={elem.release_date || elem.first_air_date}
                mediaType={type ? "tv" : "movie"}
                voteAvg={elem.vote_average}
              />
            );
          })}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
    </>
  );
};

export default Search;
