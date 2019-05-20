const fs = require('fs');

const colors = require('colors/safe');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${ base }' no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido '${ limite }' no es un número`);
            return;
        }

        let fileData = '';

        for (let i = 1; i <= limite; i++) {
            fileData += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/Tabla_${ base }_${ limite }.txt`, fileData, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`Tabla_${ base }_${ limite }.txt`)
            }
        });

    });

};

let listarTabla = (base, limite) => {

    console.log(colors.blue('\n****************************'));
    console.log(colors.blue(`\tTabla del ${base}`));
    console.log(colors.blue('****************************\n'));

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }

};

module.exports = {
    crearArchivo,
    listarTabla
};