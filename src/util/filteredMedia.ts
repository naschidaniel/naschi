import _optimizedImages from "../media/media.json";
import { OptimizedImage } from "../model/image";

const optimizedImages = _optimizedImages as OptimizedImage[];

export function filteredMedia(fileNameSrc: string) {
  return optimizedImages.filter((o) => fileNameSrc === o.fileNameSrc);
}
