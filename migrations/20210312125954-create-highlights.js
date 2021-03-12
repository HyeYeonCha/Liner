'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Highlights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
      },
      pageUrl: {
        type: Sequelize.STRING,
      },
      pageId: {
        type: Sequelize.INTEGER,
        references: { model: 'Pages', key: 'id' },
      },
      colorHex: {
        type: Sequelize.STRING,
      },
      text: {
        type: Sequelize.STRING,
      },
      theme: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Highlights');
  },
};
