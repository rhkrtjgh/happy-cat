/** public/ 정적 파일 URL (GitHub Pages base 경로 반영) */
export function assetUrl(relativePath: string): string {
  const path = relativePath.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${path}`;
}
