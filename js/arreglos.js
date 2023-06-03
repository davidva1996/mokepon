const numeros = [1,2,3,4,5,6];
const numeros2 = [8,9,12,11,12]

const mascotas = [{nombre: 'puchini', edad: 3, raza: 'perro'},
                {nombre: 'koki', edad: 5, raza: 'perro'},
                {nombre: 'sasha', edad: 2, raza: 'gato'}, 
                {nombre: 'matias', edad: 2, raza: 'gato'},
                {nombre: 'mosti', edad: 6, raza: 'perro'}, ];

//METODO FILTER

// 1) Devolver loa numeros menores a 5 del arreglo numeros

//  const numerosFiltrados = numeros.filter(x=> x < 5)

//  console.log(numerosFiltrados)



// 2) Devolver solo los animales que sean perros


// const perros =  mascotas.filter (x=>x.raza == 'perro')

// console.log (perros);


// METODOS .MAP

//1) multiplicar los numeros por 2

// const multiplicados = numeros.map(x=>x*2)
// console.log(multiplicados)

// 2) PAREJAS

// const parejas = numeros.map( x=> [x , x])
// console.log(parejas)

// 3) sacar promedio de edades de las mascotas NO HACER ESTE METODO HAGALO CON REDUCE

// const suma = (ns) => {

//     let acumulado = 0;
//     for (i=0; i < ns.length; i++) {

//         acumulado += ns [i];
//     }
//     return acumulado
// }

// const edades = mascotas.map(x=>x.edad)
// const resultado = suma (edades)
// console.log(resultado/ edades.length)

// METODO REDUCE
// ACC = ACUMULADOR Y el = elemento qeu esta iterando

// 1) sumando numeros
// const suma = [1,2].reduce((acc,el) => acc+el,0)
// console.log(suma)

// 2) SUMAR LOS NUMEROS DEL ARREGLO NUMEROS

//  const suma= numeros.reduce((acc, el)=> acc+el,0)
//  const suma2= numeros2.reduce((acc,el)=> acc+el,0)
//  const resultado = suma + suma2;
//  console.log(suma)
//  console.log(suma2)
//   console.log (resultado)

// 3) indexar o buscar en el reduce  para mostrar mascotas

// const indexed = mascotas.reduce((acc, el) => ({ 
//     ...acc,
//     [el.nombre]: el,

// }), {})

// console.log(indexed ['koki']);


var arr1 = [1,2,3,4];
var arr2 = [2,1,3,4];
var r = [];

for(i = 0; i < arr1.length; i++){
  r[i] =arr1[i]+arr2[i];
}

console.log(r);


