'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Questions', [{
        text: 'Why?',
        point: 100,
        themeId:1

      
      
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Questions', null, {});
     
  }
};
