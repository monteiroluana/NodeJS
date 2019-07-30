// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('postgresql://db_poc_tereos_adm:Pascal2018@localhost:5432/pg_dev_tereos');

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
// });

module.exports = (sequelize, DataTypes) => {
    const usuario = sequelize.define('usuario', {
        // attributes
        nome: DataTypes.STRING,
        login: DataTypes.STRING,
        senha: DataTypes.STRING,
        funcao: DataTypes.STRING,
      });
    return usuario
}