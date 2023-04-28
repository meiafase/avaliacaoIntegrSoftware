import {INTEGER, STRING, Sequelize}  from 'sequelize';
import Conn from '../Connection';

const FolhaPagamento = Conn.define('folhaPagamento', {
    idFolhaPagamento: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    mes: {
        type: INTEGER,
        autoIncrement: false,
        allowNull: true
    },
    ano: {
        type: INTEGER,
        autoIncrement: false,
        allowNull: true
    },
    horas: {
        type: INTEGER,
        autoIncrement: false,
        allowNull: true
    },
    valor: {
        type: INTEGER,
        autoIncrement: false,
        allowNull: true
    },
    nome: {
        type: STRING,
        autoIncrement: false,
        allowNull: true
    },
    cpf: {
        type: STRING,
        autoIncrement: false,
        allowNull: true
    }
})

FolhaPagamento.sync();

export default FolhaPagamento;