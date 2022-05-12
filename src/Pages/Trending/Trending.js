import axios from "axios";
import React, { useState, useEffect } from "react";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import SingleContent from "../../Components/SingleContent/SingleContent";
import "./Trending.css";

// console.log(process.env.REACT_APP_API_KEY);

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchtrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=1d203e3a6ccbb77dd4d9d548b01f565f&page=${page}`
    );
    setContent(data.results);
  };

  useEffect(() => {
    fetchtrending();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>

      <div className="trending">
        {content &&
          content
            .map((elem) => {
              return (
                <SingleContent
                  key={elem.id}
                  id={elem.id}
                  poster={elem.backdrop_path || elem.poster_path}
                  title={elem.title || elem.name}
                  date={elem.release_date || elem.fisrt_air_date}
                  mediaType={elem.media_type}
                  voteAvg={elem.vote_average}
                />
              );
            })
            .slice(0, 18)}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
