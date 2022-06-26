'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GrupoContatos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      grupoID: {
        type: Sequelize.INTEGER,
        references: { model: 'Grupos', key: 'id' },
        onDelete: 'Cascade',
        allowNull: false,
      },
      contatoID: {
        type: Sequelize.INTEGER,
        references: { model: 'Contatos', key: 'id' },
        onDelete: 'Cascade',
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GrupoContatos')
  },
}