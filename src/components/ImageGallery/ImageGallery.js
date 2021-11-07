import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ gallery }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(({ id, webformatURL }) => {
        return <ImageGalleryItem id={id} webformatURL={webformatURL} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
    })
  ),
};

export default ImageGallery;
