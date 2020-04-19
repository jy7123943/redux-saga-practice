import { handleImageLoad } from '../saga';
import { unsplashAction, unsplashSelector } from '../slice';
import { call, put, select } from 'redux-saga/effects';
import { getSplashImage } from '../../../api';

describe('Unsplash Saga test', () => {
  describe('handleImageLoad', () => {
    const initialImages = [];
    const fetchedImages = [{ id: 1 }, { id: 2 }];
    const mockImages = initialImages.concat(fetchedImages);
    const mockError = new Error('error');
    const mockPage = 0;

    const { loadSuccess, loadFail } = unsplashAction;

    describe('load success scenario', () => {
      const gen = handleImageLoad();

      it('selects page state', () => {
        expect(gen.next().value).toEqual(
          select(unsplashSelector.page)
        );
      });

      it('selects prev images state', () => {
        expect(gen.next(mockPage).value).toEqual(
          select(unsplashSelector.images)
        );
      });

      it('calls getSplashImage action', () => {
        expect(gen.next(initialImages).value).toEqual(
          call(getSplashImage, mockPage + 1)
        );
      });

      it('puts loadSuccess with images', () => {
        expect(gen.next(fetchedImages).value).toEqual(
          put(loadSuccess({
            images: mockImages,
            nextPage: mockPage + 1
          }))
        );
      });

      it('ended', () => {
        expect(gen.next().done).toEqual(true);
      });
    });

    describe('load fail scenario', () => {
      const gen = handleImageLoad();

      it('selects page state', () => {
        expect(gen.next().value).toEqual(
          select(unsplashSelector.page)
        );
      });

      it('selects prev images state', () => {
        expect(gen.next(mockPage).value).toEqual(
          select(unsplashSelector.images)
        );
      });

      it('puts loadFail with error', () => {
        expect(gen.throw(mockError).value).toEqual(
          put(loadFail(mockError))
        );
      });

      it('ended', () => {
        expect(gen.next().done).toEqual(true);
      });
    });
  });
});
