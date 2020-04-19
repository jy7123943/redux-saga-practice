import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unsplashAction, unsplashSelector } from './slice';
import { useInfinteScroll } from '../../hooks';

import './styles.css';
import Loader from '../../components/Loader';
import ErrorView from '../../components/ErrorView';

const ImageGrid = () => {
  const dispatch = useDispatch();
  const [target, setTarget] = useState(null);

  const {
    isLoading,
    images,
    error
  } = useSelector(unsplashSelector.all);

  useInfinteScroll({
    target,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting) {
        dispatch(unsplashAction.loadMore());
      }
    }
  });

  useEffect(() => {
    dispatch(unsplashAction.load());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorView />;
  }

  return (
    <div className="content">
      <section className="grid">
        {images.map(image => (
          <div
            key={ image.id }
            className={`item item-${Math.ceil(
              image.height / image.width,
            )}`}
          >
            <img
              src={ image.urls.small }
              alt={ image.user.username }
            />
        </div>
        ))}
        <div ref={ setTarget }>
          is Loading...
        </div>
      </section>
    </div>
  );
};

export default ImageGrid;
