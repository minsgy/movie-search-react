// API 명세 - 영화 정보 조회
export interface IMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
  isFavorite?: boolean;
}

export interface ISearchMovieRequest {
  keyword: string;
  page: number;
}

export interface ISearchMovieResponse {
  Search: IMovie[];
  totalResults: number;
  Response: 'True' | 'False';
}
export interface ISearchMovieResponseError {
  Response: string;
  Error: string;
}
