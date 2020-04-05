import React from 'react';

import './styles.css';

// const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

const ImageGrid = ({isLoading, images, error}) => {
  console.log(isLoading, images, error)
  // const [state, setState] = useState({
  //   images: [],
  // });

  // useEffect(() => {
  //   fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
  //     .then(res => res.json())
  //     .then(images => {
  //       setState({
  //         images,
  //       });
  //     })
  // }, []);

  // const { images } = state;

  return (
    <div className="content">
      <section className="grid">
        {images.map(image => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(
              image.height / image.width,
            )}`}
          >
            <img
              src={image.urls.small}
              alt={image.user.username}
            />
        </div>
        ))}
      </section>
    </div>
  );
};

export default ImageGrid;
