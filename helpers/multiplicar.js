
const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 1, listar = false, hasta = 10) => {
  try {
    let salida = '', consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} X ${i} = ${base * i}\n`;
      consola += `${base} ${'X'.cyan} ${i} ${'='.america} ${base * i}\n`;
    }
    if (listar) {
      console.log('============='.green); 
      console.log(` TABLA DEL ${base}`.grey);
      console.log('============='.green);
      console.log(consola);
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt `.blue;

  } catch (err) {
    throw (err)
  }
}

/* OTRA FORMA DE REGRESAR UNA PROMESA  */

// const crearArchivo = (base) => {

// try {

//     return new Promise((resolve, rejects) => {

//       console.log('=============');
//       console.log(` TABLA DEL ${base}`);
//       console.log('=============');
//       let salida = '';

//       for (let i = 1; i <= 10; i++) {
//         salida += `${base} X ${i} = ${base * i}\n`;
//       }

//       console.log(salida);

//       fs.writeFileSync(`tabla-${base}.txt`, salida);

//       resolve(`tabla-${base}.txt  `);
//     }
//     )
// } catch (err) {
//   throw err;
// }



module.exports = {
  crearArchivo
}

