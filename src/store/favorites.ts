import { IMovie } from '@interfaces/movies';
import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

const { persistAtom } = recoilPersist();

export const favoritesState = atom<IMovie[]>({
  key: 'favoritesState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
