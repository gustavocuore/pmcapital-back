const Sequelize = require('sequelize');

const db = require('./db');

const Unidade = db.define('Unidade', {
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
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// cria tabela se nao existe
Unidade.sync();

module.exports = Unidade;