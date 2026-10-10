const files = import.meta.glob('../assets/img/gallery/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export function galleryImage(n: number): string {
  const key = `../assets/img/gallery/gallery-${String(n).padStart(2, '0')}.webp`;
  return files[key];
}
