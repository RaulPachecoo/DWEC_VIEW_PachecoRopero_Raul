(()=>{"use strict";new class{constructor(o,e){this.nombre=o,this.edad=e}saludar(){console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)}async obtenerDatos(){const o=await fetch("https://jsonplaceholder.typicode.com/users/1");return(await o.json()).name}}("Juan",30);const{nombre:o,edad:e}=persona;console.log(persona.saludo),console.log(void console.log(`Hola, soy ${o} y tengo ${e} años`)),persona.obtenerDatos().then((o=>console.log("Información que me ha devuelto la página",o)))})();