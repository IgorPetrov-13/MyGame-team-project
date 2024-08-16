"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Answers",
      [
        {
          text: "1988 год",
          isRigh: true,
          questionId: 1,
        },
        {
         text: "1992 год",
         isRigh: false,
         questionId: 1,
       },
       {
         text: "1996 год",
         isRigh: false,
         questionId: 1,
       },
       {
         text: "2000 год",
         isRigh: false,
         questionId: 1,
       },

       {
         text: "Пиратская станция",
         isRigh: false,
         questionId: 2,
       },
       {
        text: "Северный флот",
        isRigh: true,
        questionId: 2,
      },
      {
        text: "Куклы на покое",
        isRigh: false,
        questionId: 2,
      },
      {
        text: "Гармония",
        isRigh: false,
        questionId: 2,
      },

      {
         text: "Фортепиано",
         isRigh: false,
         questionId: 3,
       },
       {
        text: "Тромбон",
        isRigh: false,
        questionId: 3,
      },
      {
        text: "Скрипка",
        isRigh: true,
        questionId: 3,
      },
      {
        text: "Саксофон",
        isRigh: false,
        questionId: 3,
      },

      {
         text: "Висел на турнике",
         isRigh: true,
         questionId: 4,
       },
       {
        text: "Подрался",
        isRigh: false,
        questionId: 4,
      },
      {
        text: "Родился без зубов",
        isRigh: false,
        questionId: 4,
      },
      {
        text: "Забрали коллекторы",
        isRigh: false,
        questionId: 4,
      },

      {
         text: "Король",
         isRigh: false,
         questionId: 5,
       },
       {
        text: "Всадник",
        isRigh: false,
        questionId: 5,
      },
      {
        text: "Принцесса",
        isRigh: false,
        questionId: 5,
      },
      {
        text: "Шут",
        isRigh: true,
        questionId: 5,
      },

      {
         text: "Выключается свет, я куда-то иду...",
         isRigh: false,
         questionId: 6,
       },
       {
         text: "Все игроки переворачивают свои карты рубашкой вверх",
         isRigh: false,
         questionId: 6,
       },
       {
         text: "Ведущий начинает петь",
         isRigh: false,
         questionId: 6,
       },
       {
         text: "Все игроки закрывают глаза",
         isRigh: true,
         questionId: 6,
       },



       {
         text: "1-2 к 1",
         isRigh: false,
         questionId: 7,
       },
       {
         text: " 3-4 к 1",
         isRigh: true,
         questionId: 7,
       },
       {
         text: "5-7 к 1",
         isRigh: false,
         questionId: 7,
       },
       {
         text: "Все мирные)",
         isRigh: false,
         questionId: 7,
       },

       {
         text: "Хакер",
         isRigh: false,
         questionId: 8,
       },
       {
         text: "Фанатик",
         isRigh: false,
         questionId: 8,
       },
       {
         text: "Беня",
         isRigh: true,
         questionId: 8,
       },
       {
         text: "Бомж",
         isRigh: false,
         questionId: 8,
       },

       {
         text: "1986 г.",
         isRigh: true,
         questionId: 9,
       },
       {
         text: "1972 г.",
         isRigh: false,
         questionId: 9,
       },
       {
         text: "1990 г.",
         isRigh: false,
         questionId: 9,
       },
       {
         text: "В XIX веке",
         isRigh: false,
         questionId: 9,
       },

       {
         text: "Наше дело",
         isRigh: false,
         questionId: 10,
       },
       {
         text: "Международная Ассоциация Организованных Преступных Группировок",
         isRigh: false,
         questionId: 10,
       },
       {
         text: "Никак, это слово 'семья' по-итальянски",
         isRigh: false,
         questionId: 10,
       },
       {
         text: "Погибни, Франция, вздохни, Италия!",
         isRigh: false,
         questionId: 10,
       },
       



       {
         text: "1705 год",
         isRigh: false,
         questionId: 11,
       },
       {
        text: "1712 год",
        isRigh: true,
        questionId: 11,
      },
      {
        text: "1720 год",
        isRigh: false,
        questionId: 11,
      },
      {
        text: "1731 год",
        isRigh: false,
        questionId: 11,
      },

      {
        text: "Львов",
        isRigh: false,
        questionId: 12,
      },
      {
       text: "Коней",
       isRigh: true,
       questionId: 12,
     },
     {
       text: "Грифонов",
       isRigh: false,
       questionId: 12,
     },
     {
       text: "Греческих богов",
       isRigh: false,
       questionId: 12,
     },

     {
        text: "В Цаском селе",
        isRigh: false,
        questionId: 13,
      },
      {
       text: "В Петергофе",
       isRigh: false,
       questionId: 13,
     },
     {
       text: "В Кронштадте",
       isRigh: false,
       questionId: 13,
     },
     {
       text: "По льду реки Нева",
       isRigh: true,
       questionId: 13,
     },

     {
        text: "Меньшиков",
        isRigh: true,
        questionId: 14,
      },
      {
       text: "Петр 1",
       isRigh: false,
       questionId: 14,
     },
     {
       text: "Царевич Алексей",
       isRigh: false,
       questionId: 14,
     },
     {
       text: "Беглов",
       isRigh: false,
       questionId: 14,
     },

     {
        text: "Немцы",
        isRigh: false,
        questionId: 15,
      },
      {
       text: "Флот проводил учения",
       isRigh: false,
       questionId: 15,
     },
     {
       text: "Шведы ",
       isRigh: false,
       questionId: 15,
     },
     {
       text: "Пьяные моряки",
       isRigh: true,
       questionId: 15,
     },

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Answers", null, {});
  },
};
