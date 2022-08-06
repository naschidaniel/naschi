export interface Gallery {
  fileNameSrc: string;
  alt: string;
  title: string;
  isThumbnail?: false;
}

export interface ResponsiveSource {
  alt: string;
  height: number;
  sizes: string;
  src: string;
  srcset: string;
  srcsetWebp: string;
  title: string;
  width: number;
}

export interface OptimizedImage {
  fileNameSrc: string;
  fileNameThumbnail: string;
  fileNameThumbnailWebp: string;
  fileName: string;
  fileNameWebp: string;
  fileType: string;
  width: number;
}
