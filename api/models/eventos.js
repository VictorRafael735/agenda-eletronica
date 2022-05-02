'use strict';
module.exports = (sequelize, DataTypes) => {
  const Eventos = sequelize.define('Eventos', {
    nome_evento: DataTypes.STRING,
    data_evento: DataTypes.DATE,
    contato_id: DataTypes.INTEGER,
  }, {});

    this.associate = function(models) {
      this.hasMany(models.contatos, {
        foreignKey: 'evento_id'
      });
      this.belongsTo(models.contatos, {
        foreignKey: 'contato_id'
      });
    }
  Eventos.init({
    nome_evento: DataTypes.STRING,
    data_evento: DataTypes.DATE,
    contato_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Eventos',
  });
  return Eventos;
};