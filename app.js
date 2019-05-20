const colors = require('colors/safe');

const argv = require('./configuracion/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');




let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(nombreArchivo => console.log(`¡Archivo ${ colors.blue(nombreArchivo) } creado de manera exitosa!`))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('Comando desconocido');
        break;
}