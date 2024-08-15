

const bcrypt = require('bcrypt')
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'jd@mail.ru',
        password: await bcrypt.hash('123', 10),
        score:0
      },
      {
        name: 'Mad Max',
        email: 'mm@mail.ru',
        password: await bcrypt.hash('123', 10),
        score:0
      },
      {
        name: 'Benya',
        email: 'benyane@mail.ru',
        password: await bcrypt.hash('123', 10),
        score:0
      },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
