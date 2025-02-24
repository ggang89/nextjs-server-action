// 일부러 지연시켜주는 함수 생성

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}