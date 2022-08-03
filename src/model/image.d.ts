export interface ResponsiveSourceInterface {
  sizes: string;
  srcset: string;
  srcsetWebp: string;
  fallback: {
    src: string;
    width: number;
    height: number;
  };
}
