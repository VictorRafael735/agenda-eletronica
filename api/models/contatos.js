'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contatos = sequelize.define('Contatos', {
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

    this.associate = function(models) {
      this.belongsToMany(models.eventos, {
        foreignKey: 'contato_id',
        through: Ids
      });
      this.belongsToMany(models.grupos, {
        foreignKey: 'participante_id',
        through: Ids
      });
    }
  
  Contatos.init({
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Contatos',
  });
  return Contatos;
}