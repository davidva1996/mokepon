//PROBLEMA: SACAR LA LISTA DE LOS PLATOS PRINCIPALES

// 1.0 primero se crea el array principal con los datos
// var almuerzos = [

//     {principal: 'arepa', postre: 'helado'},
//     {principal: 'tacos', postre: 'torta de queso'},
//     {principal: 'pizza', postre: 'galletas'},
//     {principal: 'sushi', postre: 'quesillo'},
//     {principal: 'pollo', postre: 'helado'},
//     {principal: 'bistec', postre: 'helado'},

// ]

// 1.1 se crea un array vacio para almacenar los datos

// var platosPrincipales = []

//1.2 SE CREA EL FOR PARA RECORRER EL ARRAY

// for (var i = 0; i< almuerzos.length; i++) {

//   platosPrincipales.push(almuerzos[i].principal);
// }

// console.log(platosPrincipales)


//MOSTRAR DATOS CON .MAP

// var platosPrincipales = almuerzos.map(function(T_almuerzos) {

//     console.log(T_almuerzos)
// })



// retornando datos Con .MAP

// var platosPrincipales = almuerzos.map(function(T_almuerzos) {

//     return T_almuerzos.principal
// })

// console.log(platosPrincipales)


// UTILIZANDO FILTER 

// var platosPrincipales = almuerzos.filter (x=>x.postre == "helado")

// console.log(platosPrincipales)



//SUMA DE ARRAYS

// const list1 = [1,2,3];
// const list2 = [3,2,1];
// let resultado =[];

// for( i=0; i < list1.length; i++) {

//     resultado[i] = list1[i] + list2[i];
// }

// console.log(resultado);

// ejercicio de ovejas
// const ovejas = [
//     { name: 'Noa', color: 'azul' },
//     { name: 'Euge', color: 'rojo' },
//     { name: 'Ki Na Ma', color: 'rojo' }
//   ]

//   function contarOvejas(ovejas) {

//     validateSheep = ovejas.filter(sheep => {

//         let variableA = sheep.name.toLowerCase().indexOf('a') >=0;
//         let variableN = sheep.name.toLowerCase().indexOf('n') >=0;
//         let rojo = sheep.color == 'rojo';

//         return (variableA && variableN && rojo)

//     })

//     return validateSheep
//   }

//   console.log(contarOvejas(ovejas))
