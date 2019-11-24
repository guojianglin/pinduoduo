import { Product, ImageSlider } from 'src/app/shared';

export interface ProductVariant {
    id: number;
    product: Product;
    name: string;
    price: number;
    listPrice: number;
    productVariantImages: ImageSlider;
}