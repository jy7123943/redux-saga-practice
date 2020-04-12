import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../Loader';
import ErrorView from '../ErrorView';
import { unsplashSelector } from '../../containers/ImageGrid/slice';
import './styles.css';

const ImageGrid = () => {
  const { isLoading, images, error } = useSelector(unsplashSelector.all);

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
