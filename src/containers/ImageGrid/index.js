import React, { useEffect } from 'react';
import ImageGrid from '../../components/ImageGrid';
import { useSelector, useDispatch } from 'react-redux';

import { loadImages } from '../../actions';

const ImageGridContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, images, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(loadImages());
  }, []);

  return (
    <ImageGrid
      isLoading={isLoading}
      images={images}
      error={error}
    />
  )
};

export default ImageGridContainer;
