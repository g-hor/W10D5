import React from 'react';
import { useParams } from 'react-router-dom';

const GalleryView = (props) => {
  const { galleryId } = useParams();
  const { galleries } = props;
  const gallery = galleries.find(currentGallery => {
    return currentGallery.id == galleryId;
  });

  return (
    <h2>
      {gallery.name}
    </h2>
  )
};

export default GalleryView;