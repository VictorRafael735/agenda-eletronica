'use strict';
module.exports = (sequelize, DataTypes) => {
  const GrupoContatos = sequelize.define('GrupoContatos', {
    grupoID: DataTypes.INTEGER,
    contatoID: DataTypes.INTEGER
  },
    { freezeTableName: true });
  return GrupoContatos;
};