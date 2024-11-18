'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('users', [
      
      {
        full_name: 'Usuário 1',
        username: 'usuario1',
        email: 'usuario1@example.com',
        password: 'senha1', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        full_name: 'Usuário 2',
        username: 'usuario2',
        email: 'usuario2@example.com',
        password: 'senha2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
