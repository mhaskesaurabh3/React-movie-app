import { Chip } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import "../App.css";

const Genre = ({
  selectedGenres,
  setSelectedGeneres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGeneres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGeneres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=1d203e3a6ccbb77dd4d9d548b01f565f&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
    return setGenres([]);
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0px" }}>
      {selectedGenres.map((genre) => {
        return (
          <Chip
            label={genre.name}
            clickable
            key={genre.id}
            style={{ margin: "6" }}
            size="small"
            color="primary"
            onDelete={() => handleRemove(genre)}
          />
        );
      })}
      {genres &&
        genres.map((genre) => {
          return (
            <Chip
              label={genre.name}
              clickable
              key={genre.id}
              style={{ margin: "6" }}
              size="small"
              variant="filled"
              onClick={() => handleAdd(genre)}
            />
          );
        })}
    </div>
  );
};

export default Genre;
