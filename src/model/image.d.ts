export interface ResponsiveSource {
  sizes: string;
  srcset: string;
  srcsetWebp: string;
  fallback: {
    src: string;
    width: number;
    height: number;
  };
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
