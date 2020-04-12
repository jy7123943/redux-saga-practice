import React, { useEffect } from 'react';
import ImageGrid from '../../components/ImageGrid';
import { useDispatch } from 'react-redux';

import { unsplashAction } from './slice';

const ImageGridContainer = () => {
  const dispatch = useDispatch();
  const { load } = unsplashAction;

  useEffect(() => {
    dispatch(load());
  }, []);

  return <ImageGrid />;
};

export default ImageGridContainer;
