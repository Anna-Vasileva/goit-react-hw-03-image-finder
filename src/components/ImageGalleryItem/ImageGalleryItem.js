import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <li className="ImageGalleryItem" key={id}>
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string,
};

export default ImageGalleryItem;
