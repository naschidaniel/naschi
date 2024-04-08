import { ResponsiveSource, OptimizedImage } from "../model/image";

export function getResponsiveSource(
  alt: string,
  isThumbnail: boolean,
  optimizedImages: OptimizedImage[],
  title: string,
): ResponsiveSource {
  const gitsha = import.meta.env.VITE_APP_GITSHA;
  return {
    alt,
    height: 123, // TODO Dummy Value
    sizes: optimizedImages
      .map((i) => `(max-width: ${i.width}px) ${i.width}px`)
      .join(", "),
    src: optimizedImages.find((i) => i.width === 1280).fileNameSrc,
    srcset: optimizedImages
      .map((i) =>
        isThumbnail
          ? `${i.fileNameThumbnail}?v=${gitsha} ${i.width}w`
          : `${i.fileName}?v=${gitsha} ${i.width}w`,
      )
      .join(", "),
    srcsetWebp: optimizedImages
      .map((i) =>
        isThumbnail
          ? `${i.fileNameThumbnailWebp}?v=${gitsha} ${i.width}w`
          : `${i.fileNameWebp}?v=${gitsha} ${i.width}w`,
      )
      .join(", "),
    title,
    width: 1234,
  };
}
