// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o]=> Nico => string[]=> string

//tipado de la sobrecarga de funciones
export function parseStr(input: string): string[];
export function parseStr(input: string[]):string;
export function parseStr(input: number):boolean;


export function parseStr(input: unknown): unknown{
  if(Array.isArray(input)){
    return input.join(''); //string
  } else if (typeof input === 'string'){
    return input.split('')//string[]
  }else if(typeof input === 'number'){
    return true; //boolean
  }
}

const rtaArray = parseStr('Nico');
rtaArray.reverse();

console.log('rtaArray', 'Nico =>', rtaArray);

const rtaStr = parseStr(['N','i','c','o']);
rtaStr.toLowerCase();

console.log('rtaStr',"['N','i','c','o'] =>", rtaStr);

const rtaBoolean = parseStr(12);
