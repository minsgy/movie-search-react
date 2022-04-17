import { useSearchParams } from 'react-router-dom';

/**
 *  @description 대입한 Key에 맞는 URL 쿼리스트링 값을 반환합니다.
 *  @param {string} queryKey - 쿼리스트링 키
 *  @returns {string} - 쿼리스트링 값
 *  @example
 *  const tabValue = useQueryString('tab');
 */

const useQueryString = (queryKey: string): string => {
  const [searchParams] = useSearchParams();
  const queryKeyParams = searchParams.get(queryKey);
  return queryKeyParams ? queryKeyParams : '';
};

export default useQueryString;
