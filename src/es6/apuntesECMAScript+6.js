function newFunction(name, age, country) {
    var name = name || "Yo";
    var age = age || 32;
    var country = country || "Colombia";
    console.log(name, age, country);
}

//es6
//Pasar Argumentos directamente desde los parametros
function newFunction2(name = "Oscar", age = 32, country = "COL"){
    console.log(name, age, country);
}

newFunction2();
newFunction2("Ricardo", "23", "COL");

//Template Literals

let hello = "hello"; 
let world = "world";
let epic = `${hello} ${world}`; 
console.log(epic);

//Multilinea

let lorem = `Hola bebé, esto es increible UwU
ahora es mas facil hacer una multilinea xd
`;

console.log(lorem);

//Estructuración de elementos

let person = {
    "name": "oscar",
    "age": 32,
    "country": "COL"
}

console.log(person.name, person.age);

let {name, age, country} = person;


console.log(name, age, country);

//Operador de propagación

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = [...team1, ...team2];
console.log(education);

//Variables

var varHola = ""; //scope global
let letHola = ""; //scope local
const constHola = ""; //no cambia su valor y su scope es global

//Propiedad de objetos mejorada

let name = "Pedro";
let age = 50;

obj = {name, age};

//Funciones de tipo flecha

const names = [
    {name: "Fernando", age: 17},
    {name: "Alejandro", age: 17}
] 
//es5
let listaDeNombre = names.map(function (item) {
   console.log(item.name); 
});
//es6
let listaDeNombres2 = names.map(item => console.log(item.name));

let num = 5;
const square = num => num * num;
console.log(square);

//Promesas


const helloPromise = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        resolve('Hey!');
      } else {
        reject('Ups!!');
      }
    });
  }
  
  helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

//Clases
  class Calculator {
      constructor(){
          this.valueA = 0;
          this.valueB = 0;
        }
        sum(valueA, valueB){
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
     }
}

const calc = new Calculator();
console.log(calc.sum(2,2));

//Import y Export
let hello = require('./module');

console.log(hello());

//Generadores

function* helloWorld(){
    if(true){
        yield "Hello, ";
    }
    if(true){
        yield "world";
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//es7
//Qué se implemento? nace en julio del 2016

let numbers = [1,2,3,7,8];
if(numbers.includes(9)){
    console.log("shi");
}else {
    console.log("nu");
}

//Elevar a la potencia

let base = 4;
let exponente = 4;

let resultado = base ** exponente;
console.log(resultado);

//es8 lanzada en julio del 2017

//Object.entries. devuelve el valor y la clave de una matriz

const data = {
    frontend: "Oscar",
    backend: "Maria",
    design: "Ana"
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


const data = {
    frontend: "Oscar",
    backend: "Maria",
    design: "Ana"
}

const values = Object.values(data);
console.log(values);

//Agregar elementos a un srtring

const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, "-----"));

//Async Await

const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(() => resolve("Hello world"), 3000)
        : reject(new Error("Error"));
    });
}

const helloAsync =  async () => {
    const hello = await helloWorld();
    console.log(hello);    
}

helloAsync();

const otraFuncion = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
}

otraFuncion();

//es9
//lanzada en junio del 2018

//Operador de reposo, puede ectraer las propiedades de un objeto que aún no se a construido

const obj = {
    name: "oscar",
    age: 10,
    country: "COL"
}

let {name, ...all} = obj;

console.log(all);

const obj2 = {
    ...obj,
    sangre: "O+"
}

console.log(obj2);

//Promise.finally

const helloWorld = () => {
    return new Promise((resolve, reject)=> {
        (true) ? setTimeout(() => resolve("hello"),3000) : reject("F");
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console(error))
    .finally(() => console.log("Finalizo"))

//regex

const regexData = /([0-9]{4})-([0-9]){2})-([0-9]{2})/
const match = regexData.exec("2018-04-20");
const año = match[1]
const mes = match[2]
const day = match[3]

console.log(año, mes, day);

//es10

 let array = [1,2,3, [1,2,3, [1,2,3]]];

 console.log(array.flat(0));

 let array2 = [1,2,3,4,5];
 console.log(array2.flatMap(value => [value, value * 2]));

 let hello = "          helo world";

 console.log(hello.trimStart());//elimina los espacios en blanco de un string *los del principio"

 let hello2 = "hello 2                ";
 console.log(hello2.trimEnd());

//Funciones async

try {

} catch {
    error
}

let entries = [["name", "oscar"], ["age", 32]];

console.log(Object.fromEntries(entries));

//Objeto de tipo simbolo

let mySimbol = "My simbol";
let symbol = Symbol(mySimbol);
console.log(symbol.description);

//es2020 Junio del 2020

//dinamic import

//BigInt

const  BigNumber = 9007199254740991n;
const otroBigNumber = BigInt(9007199254740991);

console.log(BigNumber, otroBigNumber);

//Promise allSettled

const promise1 = new Promise((resolve, reject) => reject("reject"));

const promise2 = new Promise((resolve, reject) => resolve("resolve"));

const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


//Global This
console.log(globalThis);

//Operador de nulos

const foo = null ?? "default string";
console.log(foo);

//Opcional shaning


const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log("email");
}else{
    console.log("F");
}

//ec12
//Replace
const string = "JavaScript JavaScript es hermoso UwU";
//Metodo Antiguo
const replaced = string.replace("JavaScript", "XD");
console.log(replaced);
//Metodo Nuevo

const replace2 = string.replaceAll("JavaCript", "Python");
console.log(replace2);

//Metodos Privados

class Mesage {
    #show(val){ //El # hace que el metodo sea privado
        console.log(val);
    }
    get #add(val){
        
    }
}

const message = new Mesage();
message.show("Hola!");

//Promise Any

const promise1 = new Promise((resolve, reject)=> reject("1"));

const promise2= new Promise((resolve, reject)=> resolve("1"));

const promise3 = new Promise((resolve, reject)=> resolve("3"));

Promise.Any([promise1, promise2, promise3])
    .then(response => console.log(response));

//With reft

class anyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
//    { ... }
}

//Expresiones y operadores

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);
console.log(isTrue ??= isFalse); 






















