'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Grupos', [{
    nome_grupo: 'Grupo bem legal',
    participante_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
