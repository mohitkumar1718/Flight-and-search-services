'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airplanes',[
    {
      modelNumber:"Boeing 737",
      capacity:300,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber:"Boeing 777",
      capacity:400,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber:"Airbus A330",
      capacity:330,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber:"Airbus A220",
      capacity:380,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber:"Airbus A350 XWB",
      capacity:400,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber:"Boeing 757",
      capacity:300,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber:"Comac C919",
      capacity:200,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber:"Boeing 787 Dreamliner",
      capacity:350,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber:"Airbus A330neo",
      capacity:250,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
