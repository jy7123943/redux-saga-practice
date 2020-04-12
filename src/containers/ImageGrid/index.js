import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import ErrorView from '../../components/ErrorView';
import { unsplashAction, unsplashSelector } from './slice';
import './styles.css';

const ImageGrid = () => {
  const dispatch = useDispatch();
  const { isLoading, images, error } = useSelector(unsplashSelector.all);

  useEffect(() => {
    const { load } = unsplashAction;

    dispatch(load());
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
      </section>
    </div>
  );
};

export default ImageGrid;
