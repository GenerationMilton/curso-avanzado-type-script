type Sizes = 'S'| 'M'|'L'|'XL';
type userId = string | number; //en una linea el type define tipos en interfaces no es posible
//el type no se puede extender


// a diferencia del type la interface necesita el cuerpo para definir el tipo
//La interface se puede extender
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock:number;
  size?:Sizes;
}

const products :Product[]=[];

products.push({
  id:'1',
  title:'product 1',
  createdAt: new Date(),
  stock:90
})

const addProduct =(data:Product)=>{
  products.push(data);
}
