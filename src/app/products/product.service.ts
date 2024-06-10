import { Product } from './product.model';

export const products: Product[]=[];

export const addProduct=(data:Product)=>{
  // data.id = 'adadsdadasdas';  solo lectura readonly
  // data.createdAt= new Date(1998,1,1);  solo lectura readonly
  products.push(data);
}
