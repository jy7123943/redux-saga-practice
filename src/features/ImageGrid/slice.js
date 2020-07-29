import { createSelector, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isLoading: false,
  images: [],
  error: null,
  page: 0,
};

const reducers = {
  load: (state) => {
    state.isLoading = true;
  },
  loadMore: (state) => {
    return state;
  },
  loadSuccess: (state, { payload: { images, nextPage } }) => {
    state.isLoading = false;
    state.images = images;
    state.page = nextPage;
  },
  loadFail: (state, { payload: error }) => {
    state.isLoading = false;
    state.error = error;
  },
}

const name = 'UNSPLASH';
const slice = createSlice({
  name, initialState, reducers
});

const selectLoadingState = createSelector(
  state => state.isLoading,
  (isLoading) => isLoading,
);

const selectImages = createSelector(
  state => state.images,
  (images) => images,
);

const selectError = createSelector(
  state => state.error,
  (error) => error,
);

const selectPage = createSelector(
  state => state.page,
  (page) => page,
);

const selectAllState = createSelector(
  selectLoadingState,
  selectImages,
  selectError,
  (isLoading, images, error) => {
    return { isLoading, images, error };
  }
);

export const unsplashSelector = {
  isLoading: state => selectLoadingState(state[UNSPLASH]),
  images: state => selectImages(state[UNSPLASH]),
  error: state => selectError(state[UNSPLASH]),
  all: state => selectAllState(state[UNSPLASH]),
  page: state => selectPage(state[UNSPLASH]),
};

export const UNSPLASH = slice.name;
export const unsplashReducer = slice.reducer;
export const unsplashAction = slice.actions;
