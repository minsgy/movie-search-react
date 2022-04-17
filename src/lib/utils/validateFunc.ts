// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isPath = (value: string): boolean => {
  // 넘어오는 데이터가 빈 문자열 일 경우, false 반환
  return value !== '';
};
