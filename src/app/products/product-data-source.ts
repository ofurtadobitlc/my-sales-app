import { Observable } from "rxjs";
import { Product } from "./products.dto";

export interface ProductDataSource {
    getProducts(): Observable<Product[]>
}
