const suma = (a, b) => {
  let resultado = a + b;
  return resultado;
}
console.log(suma(5, 3)); // Salida: 8

const sonIguales = (x, y) => {
  return x === y;
}
console.log(sonIguales(5, 5)); // Salida: true

function tienenMismaLongitud(str1, str2) {
  return str1.length === str2.length;
}
console.log(tienenMismaLongitud("hola", "adios")); // Salida: true

function esPositivo(numero) {
  if (numero > 0) {
    return "Es positivo";
  } else if (numero < 0) {
    return "Es negativo";
  } else {
    return false;
  }
}
console.log(esPositivo(10)); // Salida: "Es positivo"

const colors = (color) => {
  switch (color) {
    case "red":
      return "This is red";
    case "blue":
      return "This is blue";
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default:
      return "Color not found";
  }
}
console.log(colors("blue")); // Salida: "This is blue"

const fizzBuzz = (numero) => {
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "fizzbuzz";
  } else if (numero % 3 === 0) {
    return "fizz";
  } else if (numero % 5 === 0) {
    return "buzz";
  } else {
    return numero;
  }
}
console.log(fizzBuzz(15)); // Salida: "fizzbuzz"

const devolverPrimerElemento = (array) => {
  return array[0];
}
console.log(devolverPrimerElemento([1, 2, 3])); // Salida: 1

const agregarItemAlFinalDelArray = (array, elemento) => {
  array.push(elemento);
  return array;
}
console.log(agregarItemAlFinalDelArray([1, 2, 3], 4)); // Salida: [1, 2, 3, 4]

const nuevoUsuario = (nombre, email, password) => {
  return {
    nombre: nombre,
    email: email,
    password: password
  };
}
console.log(nuevoUsuario("Juan", "juan@example.com", "contraseña")); // Salida: { nombre: 'Juan', email: 'juan@example.com', password: 'contraseña' }
const verificarPassword = (usuario, password) => {
  return usuario.password === password;
}
console.log(verificarPassword({ nombre: "Juan", password: "contraseña" }, "contraseña")); // Salida: true

const actualizarPassword = (usuario, nuevaPassword) => {
  usuario.password = nuevaPassword;
  return usuario;
}
console.log(actualizarPassword({ nombre: "Juan", password: "123" }, "456")); // Salida: { nombre: 'Juan', password: '456' }

const agregarAmigo = (usuario, nuevoAmigo) => {
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}
console.log(agregarAmigo({ nombre: "Juan", amigos: ["Pedro"] }, "Luis")); // Salida: { nombre: 'Juan', amigos: ['Pedro', 'Luis'] }

const pasarUsuarioAPremium = usuarios => {
  for (let usuario of usuarios) {
    usuario.esPremium = true;
  }
  return usuarios;
}
console.log(pasarUsuarioAPremium([{ nombre: "Ana", esPremium: false }, { nombre: "Carlos", esPremium: false }])); // Salida: [{ nombre: 'Ana', esPremium: true }, { nombre: 'Carlos', esPremium: true }]

const sumarLikesDeUsuario = usuario => {
  let sumaLikes = 0;
  usuario.posts.forEach(post => {
    sumaLikes += post.likes;
  });
  return sumaLikes;
}
console.log(sumarLikesDeUsuario({ posts: [{ likes: 10 }, { likes: 20 }, { likes: 5 }] })); // Salida: 35

class Persona {
  constructor(nombre, apellido, edad, domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
  }

  detalle() {
    return {
      Nombre: this.nombre,
      Apellido: this.apellido,
      Edad: this.edad,
      Domicilio: this.domicilio
    };
  }
}
let persona = new Persona("Juan", "Perez", 22, "Saavedra 123");

const crearInstanciaPersona = (nombre, apellido, edad, domicilio) => {
  return new Persona(nombre, apellido, edad, domicilio);
}
console.log(crearInstanciaPersona(persona.nombre, persona.apellido, persona.edad, persona.domicilio)); // Salida: { Nombre: 'Juan', Apellido: 'Perez', Edad: 22, Domicilio: 'Saavedra 123' }

const sumarArray = (numeros, cb) => {
  let suma = numeros.reduce((total, num) => total + num, 0);
  cb(suma);
}
sumarArray([1, 2, 3, 4, 5], suma => console.log("Suma:", suma)); // Salida: Suma: 15

const copiarEach = (array, cb) => {
  array.forEach(elemento => cb(elemento));
}
copiarEach(["a", "b", "c"], elemento => console.log("Elemento:", elemento)); // Salida: Elemento: a, Elemento: b, Elemento: c

const operacionMatematica = (n1, n2, cb) => {
  return cb(n1, n2);
}
console.log(operacionMatematica(5, 3, (a, b) => a * b)); // Salida: 15

function filter(array) {
  return array.filter(elemento => elemento.startsWith("a"));
}
console.log(filter(["apple", "banana", "avocado", "grape"])); // Salida: ['apple', 'avocado']


module.exports = {
    suma,
    sonIguales,
    tienenMismaLongitud,
    esPositivo,
    colors,
    fizzBuzz,
    devolverPrimerElemento,
    agregarItemAlFinalDelArray,
    nuevoUsuario,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    Persona,
    crearInstanciaPersona,
    sumarArray,
    copiarEach,
    operacionMatematica,
    filter
}
