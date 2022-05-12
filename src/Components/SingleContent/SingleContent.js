import React from "react";
import { img_300, img_500, unavailable } from "../Config/Config";
import "./SingleContent.css";
import Badge from "@mui/material/Badge";
import CustomPagination from "../Pagination/CustomPagination";

const SingleContent = ({ id, poster, title, date, mediaType, voteAvg }) => {
  return (
    <div className="media">
      <Badge
        badgeContent={voteAvg}
        color={voteAvg > 7 ? "success" : "secondary"}
      />

      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      ></img>
      <b className="title">{title}</b>
      <span className="subTitle">
        {mediaType === "tv" ? "Web Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </div>
  );
};

export default SingleContent;
