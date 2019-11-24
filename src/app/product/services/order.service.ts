import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductVariant } from '../domain';


@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(private http: HttpClient) {}
    getProductVariantsByProductId(productId) {
        return this.http.get<ProductVariant[]>('assets/virtual-data/productVariants.json', {params: {
            _expand: 'product',
            _embed: 'productVariantImages',
            productId
        }});
    }
}