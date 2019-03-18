const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('actualizar', 'Crea una tarea por hacer', { descripcion, completado })
    .command('borrar', 'Borra una tarea por hacer o completada', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}