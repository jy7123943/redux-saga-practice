import { IMAGES } from '../constants';

const loadImages = () => ({
  type: IMAGES.LOAD,
});

const setImages = (images) => ({
  type: IMAGES.LOAD_SUCCESS,
  images,
});

const setError = (error) => ({
  type: IMAGES.LOAD_FAILURE,
  error,
});

export {
  loadImages,
  setImages,
  setError,
}
