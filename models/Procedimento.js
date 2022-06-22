const Sequelize = require('sequelize');
const db = require('./db');

const Procedimento = db.define('Procedimento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    cuidados: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// cria tabela se nao existe
Procedimento.sync();

module.exports = Procedimento;
