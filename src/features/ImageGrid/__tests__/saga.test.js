import { handleImageLoad } from '../saga';
import { unsplashAction } from '../slice';
import { call, put } from 'redux-saga/effects';
import { getSplashImage } from '../../../api';

describe('Unsplash Saga test', () => {
  describe('handleImageLoad', () => {
    const mockImage = [];
    const mockError = new Error('error');

    const { loadSuccess, loadFail } = unsplashAction;

    describe('load success scenario', () => {
      const gen = handleImageLoad();

      it('calls getSplashImage action', () => {
        expect(gen.next().value).toEqual(
          call(getSplashImage)
        );
      });

      it('puts loadSuccess with images', () => {
        expect(gen.next(mockImage).value).toEqual(
          put(loadSuccess(mockImage))
        );
      });

      it('ended', () => {
        expect(gen.next().done).toEqual(true);
      });
    });

    describe('load fail scenario', () => {
      const gen = handleImageLoad();

      it('calls getSplashImage action', () => {
        expect(gen.next().value).toEqual(
          call(getSplashImage)
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
