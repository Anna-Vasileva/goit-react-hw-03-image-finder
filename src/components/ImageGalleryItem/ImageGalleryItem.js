import React from "react";
import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <li className={s.ImageGalleryItem} key={id}>
      <img src={webformatURL} alt="" className={s["ImageGalleryItem-image"]} />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string,
};

export default ImageGalleryItem;
