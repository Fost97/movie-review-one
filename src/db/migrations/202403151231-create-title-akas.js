module.exports = {
  up:
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
  async (queryInterface, Sequelize) => {
    await queryInterface.createTable('title_akas', {
      titleId: {
        type: Sequelize.DataTypes.STRING,
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        allowNull: false,
        references: {
          model: 'title_basics',
          key: 'tconst'
        },
        description: 'alphanumeric unique identifier of the title'
      },
      ordering: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        description: 'a number to uniquely identify rows for a given titleId'
      },
      title: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
        description: 'the localized title'
      },
      region: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        description: 'the region for this version of the title'
      },
      language: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        description: 'the language of the title'
      },
      types: {
        type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.STRING),
        allowNull: false,
        description: 'Enumerated set of attributes for this alternative title. One or more of the following: "alternative", "dvd", "festival", "tv", "video", "working", "original", "imdbDisplay". New values may be added in the future without warning'
      },
      attributes: {
        type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.STRING),
        allowNull: false,
        description: 'Additional terms to describe this alternative title, not enumerated'
      },
      isOriginalTitle: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        description: '0: not original title; 1: original title'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal('now()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal('now()')
      }
    })
  },

  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('title_akas')
  }
}
