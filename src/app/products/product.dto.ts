import { Product } from "./product.model";

//excluir campos del objeto
export interface CreateProductDto extends Omit<Product, 'id'| 'createdAt'| 'updatedAt'| 'category'>{
  categoryId: string;
}

//elijo ciertas cosas para agregar tipos nuevos
type example = Pick<Product, 'color'| 'description'>

//en vez de crear un interfaz con la copia de todos los campos del DTO usamos partial
export interface UpdateProductDto extends Partial<CreateProductDto>{

}

//contrario de partial required
type example2 = Required<Product>;

//dto producto find pero de tipo readOnly y partial
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
  readonly tags: ReadonlyArray<string>; //read only de asignacion y profundo de los metodos
}

type example3 = Readonly<Product>;

