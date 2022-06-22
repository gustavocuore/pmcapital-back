const Sequelize = require('sequelize');
const db = require('./db');

const Atendente = db.define('Atendente', {
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
    endereco_residencia: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    carga_horaria_semanal: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

// cria tabela se nao existe
Atendente.sync();

module.exports = Atendente;
