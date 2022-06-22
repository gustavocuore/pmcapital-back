const Sequelize = require('sequelize');
const db = require('./db');

const Cliente = db.define('Cliente', {
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
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    influencer: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    redes_sociais: {
        type: Sequelize.STRING,
        allowNull: true
    },
    data_nascimento: {
        type: Sequelize.DATE,
        allowNull: true
    }
});

// cria tabela se nao existe
Cliente.sync();

module.exports = Cliente;
