'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Contatos', [
      {
        nome: 'Ana',
        telefone: '55988888888',
        email: 'ana@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('People', null, {});
  }
};
