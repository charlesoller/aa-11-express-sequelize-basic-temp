'use strict';
const { Insect } = require("../models")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await Insect.bulkCreate([
      {
        name: 'Western Pygmy Blue Butterfly',
        description: 'They appear ornate and delicate.',
        territory: 'North America & Middle East',
        fact: "The smallest member of the butterfly family.",
        millimeters: 12
      },
      {
        name: 'Patu Digua Spider',
        description: 'They are found around American homes and are more helpful than harmful.',
        territory: 'North America, South America, Africa',
        fact: "The males are smaller than the females.",
        millimeters: 0.3
      },
      {
        name: 'Scarlet Dwarf Dragonfly',
        description: 'They are the smallest dragonflies.',
        territory: 'Southeast Asia, China, Japan, Australia',
        fact: "Also known as the Northern Pygmy Fly or Tiny Dragonfly",
        millimeters: 20
      },
      {
        name: 'Midget Moths',
        description: 'Furry and pretty.',
        territory: 'Around',
        fact: "Start out as little larvae who mine the leaves of various host plants.",
        millimeters: 3
      },
      {
        name: 'Bolbe Pygmaea Mantis',
        description: 'They are rare insects that have a special relationship with humans.',
        territory: 'Australia',
        fact: "Considered to have supernatural powers and are revered in Egyptian text.",
        millimeters: 10
      },
    ], { validate: true })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Insects", null, [
      {
        name: 'Western Pygmy Blue Butterfly',
        description: 'They appear ornate and delicate.',
        territory: 'North America & Middle East',
        fact: "The smallest member of the butterfly family.",
        millimeters: 12
      },
      {
        name: 'Patu Digua Spider',
        description: 'They are found around American homes and are more helpful than harmful.',
        territory: 'North America, South America, Africa',
        fact: "The males are smaller than the females.",
        millimeters: 0.3
      },
      {
        name: 'Scarlet Dwarf Dragonfly',
        description: 'They are the smallest dragonflies.',
        territory: 'Southeast Asia, China, Japan, Australia',
        fact: "Also known as the Northern Pygmy Fly or Tiny Dragonfly",
        millimeters: 20
      },
      {
        name: 'Midget Moths',
        description: 'Furry and pretty.',
        territory: 'Around',
        fact: "Start out as little larvae who mine the leaves of various host plants.",
        millimeters: 3
      },
      {
        name: 'Bolbe Pygmaea Mantis',
        description: 'They are rare insects that have a special relationship with humans.',
        territory: 'Australia',
        fact: "Considered to have supernatural powers and are revered in Egyptian text.",
        millimeters: 10
      }
    ])
  }
};
