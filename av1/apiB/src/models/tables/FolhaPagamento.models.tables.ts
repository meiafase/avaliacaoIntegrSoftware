import {INTEGER, STRING, Sequelize}  from 'sequelize';
import Conn from '../Connection';

const FolhaPagamentoCalculada = Conn.define('folhaPagamentoCalculada', {
    idFolhaPagamentoCalculada: {
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
    bruto: {
        type: INTEGER,
        autoIncrement: false,
        allowNull: true
    },
    irrf: {
        type: INTEGER,
        autoIncrement: false,
        allowNull: true
    },
    inss: {
        type: INTEGER,
        autoIncrement: false,
        allowNull: true
    },
    liquido: {
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

FolhaPagamentoCalculada.sync();

export default FolhaPagamentoCalculada;