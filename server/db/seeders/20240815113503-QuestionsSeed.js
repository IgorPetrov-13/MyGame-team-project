"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Questions",
      [
        {
          text: 'Когда была основана группа "Король и Шут"?',
          point: 500,
          themeId: 1,
        },
        {
          text: 'Какое название носит музыкальный проект, созданный участниками "Короля и Шута" после распада группы?',
          point: 200,
          themeId: 1,
        },
        {
          text: 'Какой из этих инструментов часто используется в песнях "Короля и Шута"?',
          point: 300,
          themeId: 1,
        },
        {
          text: 'Почему у Горшка не было передних зубов?',
          point: 400,
          themeId: 1,
        },
        {
          text: 'Главный символ группы "Король и Шут"?',
          point: 100,
          themeId: 1,
        },


        {
          text: 'Как в игре наступает ночь? ',
          point: 100,
          themeId: 2,
        },
        {
          text: 'Каково общепринятое соотношение общего числа участников и мафиози? ',
          point: 200,
          themeId: 2,
        },
        {
          text: 'Одного из этих персонажей нет ни в одной версии игры. Кого? ',
          point: 300,
          themeId: 2,
        },
        {
          text: 'В каком году была создана игра?',
          point: 400,
          themeId: 2,
        },
        {
          text: 'Как расшифровывается "МАФИЯ"? ',
          point: 500,
          themeId: 2,
        },



        {
          text: 'Когда СПБ стал столицей?',
          point: 100,
          themeId: 3,
        },
        {
          text: 'Скульптуры каких животных можно увидеть на Ани́чковом мосту?',
          point: 200,
          themeId: 3,
        },
        {
          text: 'Где пустили первый электрический трамвай?',
          point: 300,
          themeId: 3,
        },
        {
          text: 'Первый генерал-губернатор СПБ? ',
          point: 400,
          themeId: 3,
        },
        {
          text: 'Кто взорвал форт "Павел I?',
          point: 500,
          themeId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
