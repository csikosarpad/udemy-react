import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map(({ description, urls, id }) => {
    return <ImageCard key={id} src={urls.small_s3} alt={description} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
