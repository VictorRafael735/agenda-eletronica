'use strict';
module.exports = (sequelize, DataTypes) => {
  const Grupos = sequelize.define('Grupos', {
    nome_grupo: DataTypes.STRING,
    participante_id: DataTypes.INTEGER,
  }, {});
    
    this.associate = function(models) {
      this.hasMany(models.contatos, {
        foreignKey: 'grupo_id'
      });
      this.belongsTo(models.contatos, {
        foreignKey: 'participante_id'
      });
    }
  Grupos.init({
    nome_grupo: DataTypes.STRING,
    participante_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Grupos',
  });
  return Grupos;
};