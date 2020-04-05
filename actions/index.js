import { IMAGES } from '../constants';

const loadImages = () => ({
  types: IMAGES.LOAD,
});

const setImages = (images) => ({
  types: IMAGES.LOAD_SUCCESS,
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
