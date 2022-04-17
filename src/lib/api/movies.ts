import axios from 'axios';
import { PAGING_SIZE } from '@constants/size';
import { getTotalPageCount } from '@lib/utils/pagination';
import { API_HOST, API_KEY } from '@constants/api';
import { ISearchMovieRequest, ISearchMovieResponse } from '@interfaces/movies';

// 영화 검색 조회 API - 페이징 처리
export const fetchGetMovies = async ({ keyword, page }: ISearchMovieRequest) => {
  if (keyword === '') {
    // 검색어가 없을 경우,
    return {
      Search: [],
      totalResults: 1,
      page: 1,
      isLast: false,
    };
  }

  const { data } = await axios.get<ISearchMovieResponse>(
    `${API_HOST}/?apikey=${API_KEY}&s=${keyword}&page=${page}`,
  );
  switch (data.Response) {
    case 'True': {
      // 영화 검색 조회 성공
      const totalPageCount = getTotalPageCount(Number(data.totalResults), PAGING_SIZE); // 영화 검색 페이지 수
      console.log(totalPageCount);
      const isLast = page === totalPageCount; // 나올 수 있는 총 페이지 Size와
      return {
        Search: data.Search,
        totalResults: data.totalResults,
        page: page,
        isLast,
      };
    }
    case 'False':
    default:
      // 영화 검색 조회 실패 및 그 외 에러
      throw new Error('데이터를 처리하지 못했습니다.');
  }
};
