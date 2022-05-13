import React from "react";
import { img_300, img_500, unavailable } from "../Config/Config";
import "./SingleContent.css";
import Badge from "@mui/material/Badge";
import ContentModal from "../Modal/ContentModal";

const SingleContent = ({ id, poster, title, date, mediaType, voteAvg }) => {
  return (
    <ContentModal mediaType={mediaType} id={id}>
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
    </ContentModal>
  );
};

export default SingleContent;
