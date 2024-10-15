import { productsHighlightsI } from './product-highlights.interface';

export interface productImagesI{
    main: string;
    gallery: Array<string>;
    highlights: Array<productsHighlightsI>;
}