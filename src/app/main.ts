import { faker } from '@faker-js/faker';
import { addProduct, findProducts, products, updateProduct } from './products/product.service';

for(let index=0; index< 50; index++){
  addProduct({

    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']), // Corregido el método para obtener un elemento aleatorio de un array
    price: parseInt(faker.commerce.price(),10),
    isNew: faker.datatype.boolean(),
    tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()], // Ejemplo de tres palabras aleatorias como tags
    title:faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.string.uuid(),

  });
}

console.log(products);
const product = products[0];
updateProduct(product.id,{
  title: 'New title',
  stock: 80,
  price: 90
})


findProducts({
  stock:10,
  color:'red',
  createdAt: new Date(),
  isNew:false,
  tags:['as','as']
})
