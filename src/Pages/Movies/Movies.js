import axios from "axios";
import React, { useEffect, useState } from "react";
import Genre from "../../Components/Genre";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import SingleContent from "../../Components/SingleContent/SingleContent";
import useGenre from "../../hooks/useGenre";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGeneres] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=1d203e3a6ccbb77dd4d9d548b01f565f&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreforURL}`
    );
    console.log(data);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };
  useEffect(() => {
    fetchMovies();
  }, [page, genreforURL]);

  return (
    <>
      <span className="pageTitle">Movies</span>
      <Genre
        type="movie"
        genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGeneres={setSelectedGeneres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content
            .map((elem) => {
              return (
                <SingleContent
                  key={elem.id}
                  id={elem.id}
                  poster={elem.poster_path || elem.backdrop_path}
                  title={elem.title || elem.name}
                  date={elem.release_date || elem.fisrt_air_date}
                  mediaType="movie"
                  voteAvg={elem.vote_average}
                />
              );
            })
            .slice(0, 18)}
      </div>
      <CustomPagination setPage={setPage} numOfPages={numOfPages} />
    </>
  );
};

export default Movies;
