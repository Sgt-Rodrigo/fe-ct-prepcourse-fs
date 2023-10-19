/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arr = [];
   for(const prop in objeto){
      arr.push([prop, objeto[prop]])
   }
   return arr
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let arr = string.split('').sort()
   let obj = {};
   for(let i = 0; i < arr.length; i++) {
      if(!obj.hasOwnProperty(arr[i])){
         obj[arr[i]] = 1;
      } else {
         obj[arr[i]] += 1
      }
   }
   return obj
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let upperCase = '';
   let lowerCase = '';

   for(let letter of string){
      if(letter === letter.toUpperCase()){
         upperCase += letter
      } else {
         lowerCase += letter
      }
   }
   return upperCase + lowerCase
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   //con metodos

   // let wordsArr = frase.split(' ');
   // let newArr = [];
   // for(let word of wordsArr){
   //    newArr.push(word.split('').reverse().join(''))
   // }
   // return newArr.join(' ')

   //con for loops y metodos

   let wordsArr = frase.split(' ');
   let newArr = [];
   //itero sobre cada palabra que es un string > 
   for(let word of wordsArr){
      let singleWordArr = word.split('')
      let invertedWord = ''
      for(let i = singleWordArr.length-1; i >=0; i--){
         invertedWord += singleWordArr[i]
      } 
      newArr.push(invertedWord)
   }
   return newArr.join(' ')
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   return numero.toString() === numero.toString().split('').reverse().join('') ? 'Es capicua' : 'No es capicua' 
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.split('').filter(letter => !'abc'.includes(letter)).join('')
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a,b)=> a.length - b.length)

   }



function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arr = [];
   for(let i = 0; i < array1.length; i++){
      for(let j = 0; j < array2.length; j++){
         if(arr.includes(array2[j])){
            continue
         }
         
         if(array2[j] === array1[i]){
            arr.push(array2[j])
         }
      }
   }
   return arr
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
