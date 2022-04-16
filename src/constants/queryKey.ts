export const QUERY_KEY = {
  INFINITE_SEARCH_MOVIE: 'infiniteSearchMovie' as const,
};

export const REACT_QUERY_KEY = {
  SEARCH_MOVIES: (search: string) => [QUERY_KEY.INFINITE_SEARCH_MOVIE, search] as const,
};
