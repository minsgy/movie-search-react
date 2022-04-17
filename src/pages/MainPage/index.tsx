import { useMemo, useRef } from 'react';
import { useTab, useIntersectionObserver, useQueryString } from '@hooks';
import Layout from '@layouts/Layout';
import MovieList from '@components/MovieList';
import { fetchGetMovies } from '@lib/api/movies';
// import { getTotalPageCount } from '@lib/utils/pagination';
// import { PAGING_SIZE } from '@constants/size';
import { REACT_QUERY_KEY } from '@constants/queryKey';
import { useInfiniteQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
// import { searchState } from '@store/search';
import { IMovie } from '@interfaces/movies';
import { favoritesState } from '@store/favorites';
import { SEARCH_ID } from '@constants/queryString';

const MainPage = () => {
  const favorites = useRecoilValue(favoritesState);
  const hasMoreNextRef = useRef<HTMLDivElement>(null); // Intersection Observe Target 위한 ref
  const searchKeyword = useQueryString(SEARCH_ID); // 새로고침해도 사용할 수 있도록 QueryString 이용
  const { path } = useTab(); // @NOTE: path는 현재 선택된 Tab의 string을 반환한다.

  const {
    status,
    data: movies,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    REACT_QUERY_KEY.SEARCH_MOVIES(searchKeyword),
    async ({ pageParam = { page: 1, query: searchKeyword } }) => {
      const data = await fetchGetMovies({ keyword: pageParam.query, page: pageParam.page });
      return data;
    },
    {
      getNextPageParam: (lastPage) => {
        const nextParams = lastPage.isLast
          ? false
          : { query: searchKeyword, page: lastPage.page + 1 };
        return nextParams;
      },
      retry: 0,
    },
  );

  // Intersection Observer Hook을 통해 useInfinityQuery를 관리
  useIntersectionObserver({
    target: hasMoreNextRef,
    onIntersect: fetchNextPage,
    enabled: !!hasNextPage,
  });

  const renderPanel = () => {
    // @NOTE: movies.pages.Search[]의 Depth가 들어간 배열은 Flatten하여 검색한 영화 데이터만 반환한다.
    const flattenMovies = useMemo(
      () =>
        movies?.pages.reduce(
          (flat, toFlatten) => (toFlatten ? flat.concat(toFlatten.Search) : flat),
          [] as IMovie[],
        ),
      [movies],
    );

    switch (path) {
      case 'favorite':
        return <MovieList tab={path} movies={favorites} draggable />;
      case 'search':
        return (
          <MovieList
            tab={path}
            status={status}
            isLoading={isLoading}
            isFetchingNextPage={isFetchingNextPage}
            movies={flattenMovies}
            hasMoreNextRef={hasMoreNextRef}
          />
        );
      default:
        return null;
    }
  };
  return <Layout>{renderPanel()}</Layout>;
};

export default MainPage;
