import { productInformationI } from './product-info.interface';
import { productSimilarI } from './product-similar.interface';
import { productImagesI } from './product-images.interface';
export interface productI {
  images: productImagesI;
  info: productInformationI;
  similar_items?: Array<productSimilarI>;
}
