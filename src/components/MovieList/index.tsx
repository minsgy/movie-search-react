import MovieItem from '@components/MovieItem';
import Modal from '@components/common/Modal';
import { MovieListContainer, ObserverBox, Notice } from './style';
import { IMovie } from '@interfaces/movies';
import FavoriteForm from '@components/FavoriteForm';
import { useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { favoritesState } from '@store/favorites';
import Skeleton from '@components/common/Skeleton';
interface IMovieListProperties {
  tab: 'favorite' | 'search';
  status?: 'loading' | 'error' | 'success' | 'idle';
  hasMoreNextRef?: React.RefObject<HTMLDivElement>;
  movies?: IMovie[];
  isLoading?: boolean;
  isFetchingNextPage?: boolean;
  draggable?: boolean;
}

const MovieList = ({
  tab,
  status,
  isLoading,
  hasMoreNextRef,
  isFetchingNextPage,
  movies,
  draggable,
}: IMovieListProperties) => {
  const [favorites, setFavorites] = useRecoilState<IMovie[]>(favoritesState);
  const [selectMovie, setSelectMovie] = useState<IMovie>({} as IMovie);
  const [dragMovieIndex, setDragMovieIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const isFavorite = tab === 'favorite';

  // OnDrop 이벤트 활성화를 위해서 e.preventDefault() 필요
  const onDragOver = useCallback((e: React.DragEvent<HTMLLIElement>) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

  const onDragStart = useCallback(
    (e: React.DragEvent<HTMLLIElement>) => {
      const { position } = e.currentTarget.dataset;
      setDragMovieIndex(Number(position));
      e.currentTarget.classList.add('grabbing');
      e.dataTransfer.effectAllowed = 'move'; // Grab상태에서 끌어오는 데이터를 유지하는데 사용합니다. move 옵션으로 항목을 새위치로 옮길 수 있음.
    },
    [dragMovieIndex],
  );

  // 이벤트 종료 시에는 이벤트 클래스를 제거합니다.
  const onDragEnd = useCallback((e: React.DragEvent<HTMLLIElement>) => {
    e.currentTarget.classList.remove('grabbing');
    e.dataTransfer.dropEffect = 'move';
    setDragMovieIndex(null);
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLLIElement>) => {
      const grabIndex = dragMovieIndex;
      const dropIndex = Number(e.currentTarget.dataset.position);

      // 옮기려는 곳이 같거나, 이전 값이 존재하지 않는다면.
      if (grabIndex === dropIndex || grabIndex === null) {
        return;
      }

      const newFavorites = [...favorites];
      // 1. 옮기려는(dropIndex) 위치에서 1개의 요소를 제거하고, 옮기려는 데이터를 추가합니다.
      // 2. 반환 된 데이터는 삭제 된 데이터로 기존 dropIndex에 있던 아이템을 옮긴 데이터 index위치로 이동합니다
      newFavorites[grabIndex] = newFavorites.splice(dropIndex, 1, newFavorites[grabIndex])[0];
      setFavorites(newFavorites); // 교체 된 데이터를 업데이트합니다.
    },
    [dragMovieIndex],
  );

  const onOpenModal = useCallback((movie: IMovie) => {
    setSelectMovie(movie);
    setVisible(true);
  }, []);

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  // 즐겨찾기 취소/추가 기능
  const onBookmark = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { textContent } = e.currentTarget;
      switch (textContent) {
        case '즐겨찾기':
          setFavorites((favorites) => [...favorites, selectMovie]);
          break;
        case '즐겨찾기 해제':
          setFavorites((favorites) =>
            favorites.filter((movie) => movie.imdbID !== selectMovie.imdbID),
          );
          break;
      }
      setVisible(false);
    },
    [selectMovie],
  );

  const MovieItemSkeletonGroup = useCallback(() => {
    return (
      <>
        <Skeleton.MovieItem />
        <Skeleton.MovieItem />
        <Skeleton.MovieItem />
        <Skeleton.MovieItem />
        <Skeleton.MovieItem />
      </>
    );
  }, []);

  // 영화 목록 렌더링
  const renderMovieList = () => {
    if (isLoading) {
      // @NOTE: 처음 Fetching 시
      return <MovieItemSkeletonGroup />;
    }

    if (!movies || movies.length === 0 || status === 'error') {
      // @NOTE: Fetching 실패 && 데이터 목록 없음
      return <Notice>{isFavorite ? '즐겨 찾기 목록이 없습니다.' : '검색 결과가 없습니다.'}</Notice>;
    }
    return movies?.map((movie: IMovie, index: number) => {
      // @NOTE: 좋아요 여부 {Boolean}
      const isFavorite = favorites.some((favorite: IMovie) => favorite.imdbID === movie.imdbID);
      return (
        <MovieItem
          draggable={draggable}
          key={movie.imdbID}
          imdbID={movie.imdbID}
          Title={movie.Title}
          Year={movie.Year}
          Type={movie.Type}
          Poster={movie.Poster}
          isFavorite={isFavorite}
          onOpenModal={onOpenModal}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDrop={onDrop}
          onDragOver={onDragOver}
          position={draggable ? index : null}
        />
      );
    });
  };

  return (
    <>
      <MovieListContainer>
        {renderMovieList()}
        {/* @NOTE: 무한스크롤 로딩 Skeleton UI */}
        {isFetchingNextPage && <MovieItemSkeletonGroup />}
      </MovieListContainer>
      {/* 즐겨찾기 Tab에서 삭제 */}
      {!isFavorite && <ObserverBox ref={hasMoreNextRef} />}
      {visible && (
        // @NOTE: 영화 즐겨찾기 선택창 Modal
        <Modal width={300} visible={visible} onClose={onClose}>
          <FavoriteForm
            Title={selectMovie?.Title}
            isFavorite={selectMovie?.isFavorite}
            onBookmark={onBookmark}
            onClose={onClose}
          />
        </Modal>
      )}
    </>
  );
};

export default MovieList;
