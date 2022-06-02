'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Eventos', [{
      nome_evento: 'Contratando Victor',
      data_evento: new Date(), 
      contato_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
  
  }
};
