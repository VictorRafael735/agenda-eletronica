'use strict';


module.exports = (sequelize, DataTypes) => {
  const Contatos = sequelize.define('Contatos', {
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  return Contatos;
}