import { IMAGES } from '../constants';

const imageReducer = (state = [], action) => {
  if (action.type === IMAGES.LOAD_SUCCESS) {
    return [...state, ...action.images];
  }

  return state;
};

export default imageReducer;
