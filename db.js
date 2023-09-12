const Sequelize =require('sequelize');

const FilmModel = require('./models/films')

const sequelize = new Sequelize('postgres', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
});

const Film = FilmModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas');
    })

module.exports = {
    Film
}