import React from 'react';
import { useParams } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';

const GalleryView = (props) => {
  const { galleryId } = useParams();
  const { galleries } = props;
  const gallery = galleries.find(currentGallery => {
    return currentGallery.id == galleryId;
  });

  const artworks = gallery.objects.map(artwork => {
    return <ArtImageTile art={artwork.images[0]}/>;
  });


  console.log(gallery);
  return (
    <>
      <h2>
        {gallery.name}
      </h2>
      <br />
      {artworks}
    </>
  )
};

export default GalleryView;