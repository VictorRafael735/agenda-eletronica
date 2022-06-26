'use strict';
module.exports = (sequelize, DataTypes) => {
  const Grupos = sequelize.define('Grupos', {
    nome_grupo: DataTypes.STRING
  }, {});
    
    // this.associate = function(models) {
    //   this.belongsToMany(models.contatos, {
    //     foreignKey: 'grupoID',
    //     through: 'GrupoContatos',
    //     as: 'contatos'
    //   });
    // }
  Grupos.init({
    nome_grupo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Grupos',
  });
  return Grupos;
};