import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ gallery }) => {
  //   return (
  //     <ul className="ImageGallery">
  //       {gallery.map(({ id, webformatURL }) => {
  //         return <ImageGalleryItem id={id} webformatURL={webformatURL}/>;
  //       })}
  //     </ul>
  //     );
  return (
    <ul className="ImageGallery">
      {gallery.map(({ id, webformatURL }) => {
        return <ImageGalleryItem id={id} webformatURL={webformatURL} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
};

export default ImageGallery;
