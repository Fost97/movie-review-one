module.exports = {
  up:
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} Sequelize
   */
  async (queryInterface, Sequelize) => {
    await queryInterface.createTable('title_basics', {
      tconst: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        description: 'alphanumeric unique identifier of the title'
      },
      titleType: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        description: 'the type/format of the title (e.g. movie, short, tvseries, tvepisode, video, etc)'
      },
      primaryTitle: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
        description: 'the more popular title / the title used by the filmmakers on promotional materials at the point of release'
      },
      originalTitle: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
        description: 'original title, in the original language'
      },
      isAdult: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        description: '0: non-adult title; 1: adult title'
      },
      startYear: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        description: 'represents the release year of a title. In the case of TV Series, it is the series start year'
      },
      endYear: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        description: 'TV Series end year. "\N" for all other title types'
      },
      runtimeMinutes: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        description: 'primary runtime of the title, in minutes'
      },
      genres: {
        type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.STRING),
        allowNull: false,
        description: 'includes up to three genres associated with the title'
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
    await queryInterface.dropTable('title_basics')
  }
}
