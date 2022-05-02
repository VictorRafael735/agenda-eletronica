'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contatos = sequelize.define('Contatos', {
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    celular: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

    this.associate = function(models) {
      this.hasMany(models.eventos, {
        foreignKey: 'contato_id'
      });
      this.hasMany(models.grupos, {
        foreignKey: 'participante_id'
      });
    }
  
  Contatos.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    celular: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Contatos',
  });
  return Contatos;
}