'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Answers', [{
      text: 'Because',
      isRigh: true
     }], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Answers', null, {});
     
  }
};
