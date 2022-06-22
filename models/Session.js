const Sequelize = require('sequelize');
const db = require('./db');

const Session = db.define('Session', {
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
    nome_profissional: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome_cliente: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// cria tabela se nao existe
Session.sync();

module.exports = Session;
