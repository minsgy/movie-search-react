// 총 페이징 카운트 구하는 함수
export const getTotalPageCount = (totalCount: number, pageSize: number) => {
  // full은 전부이기 때문에 pagination을 사용하지 않음.
  return Math.ceil(totalCount / pageSize);
};
