'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Insects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          titleCased: (word) => {
            const titleCased = word.replace(/\b\w/g, l => l.toUpperCase())
            if(word !== titleCased){
              throw new Error("Must be title-cased")
            }
          }
        }
      },
      description: {
        type: Sequelize.STRING
      },
      territory: {
        type: Sequelize.STRING
      },
      fact: {
        type: Sequelize.STRING,
        validate: {
          len: [0, 240]
        }
      },
      millimeters: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
          min: 0
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Insects');
  }
};
