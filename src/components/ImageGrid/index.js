import React from 'react';

import './styles.css';

const ImageGrid = ({ isLoading, images, error }) => (
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

export default ImageGrid;
