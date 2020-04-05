import React from 'react';
import ImageGrid from '../../components/ImageGrid';
import { useSelector } from 'react-redux';


const ImageGridContainer = () => {
  const { isLoading, images, error } = useSelector(state => state);

  return (
    <ImageGrid
      isLoading={isLoading}
      images={images}
      error={error}
    />
  )
};

export default ImageGridContainer;
