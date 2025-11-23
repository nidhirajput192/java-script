const marvel_heros =["thor", "Ironman", "spiderman"]
const dc_heroes =["Superman", "flash", "Batman"]

// .push()  --> pushing 1 array to another, as a element push hota h
//marvel_heros.push(dc_heroes);

//console.log(marvel_heros);// array ke ander array aayega as an output, wo element 4 hoga
//   ->>[ 'thor', 'Ironman', 'spiderman', [ 'Superman', 'flash', 'Batman' ] ]

// console.log(marvel_heros[4]);
// console.log(marvel_heros[3][2]);

// .concat() --> 2 array ko 1 array me convert kar deta h
const newArr = marvel_heros.concat(dc_heroes);
console.log(newArr);

// spread operator  ->> glass gir gya to spread ho jaega
// -> same kaam h concat , bss log zyada use karte h isko
const new_Arr = [...marvel_heros, ...dc_heroes];
console.log(new_Arr);


const another_Arr = [1,2,3,4,[7,6,5,[9,8,7,6]],[4,6,7,8]]
const new_another_Arr = another_Arr.flat(Infinity);
console.log(new_another_Arr);





