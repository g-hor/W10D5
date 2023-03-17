import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ArtImageTile = (props) => {
  const { art } = props;
  const { galleryId } = useParams();
  const artId = art.imageid;

  return (
    <Link to="/galleries/:galleryId/art/:artId">
      <img src={art.baseimageurl}></img>
    </Link>
  )
}

export default ArtImageTile;