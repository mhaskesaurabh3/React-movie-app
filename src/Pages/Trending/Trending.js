import axios from "axios";
import React, { useState, useEffect } from "react";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import SingleContent from "../../Components/SingleContent/SingleContent";
import "./Trending.css";

// console.log(process.env.REACT_APP_API_KEY);

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchtrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=1d203e3a6ccbb77dd4d9d548b01f565f&page=${page}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchtrending();
    // eslint-disable-next-line
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
                  poster={elem.poster_path || elem.backdrop_path}
                  title={elem.title || elem.name}
                  date={elem.release_date || elem.fisrt_air_date}
                  mediaType={elem.media_type}
                  voteAvg={elem.vote_average}
                />
              );
            })
            .slice(0, 18)}
      </div>
      <CustomPagination setPage={setPage} numOfPages={numOfPages} />
    </div>
  );
};

export default Trending;
