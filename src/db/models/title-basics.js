const { Model } = require('sequelize')

/**
 * Model that contains the usages and quota linked to an acronis instance
 * @param {import('sequelize').DataTypes} DataTypes
 * @param {import('sequelize').Sequelize} sequelize
 */
module.exports = (sequelize, DataTypes) => {
  class TitleBasics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
    }
  }

  // initiazion of the model
  TitleBasics.init(
    {
      tconst: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        description: 'alphanumeric unique identifier of the title'
      },
      titleType: {
        type: DataTypes.STRING,
        allowNull: false,
        description: 'the type/format of the title (e.g. movie, short, tvseries, tvepisode, video, etc)'
      },
      primaryTitle: {
        type: DataTypes.TEXT,
        allowNull: false,
        description: 'the more popular title / the title used by the filmmakers on promotional materials at the point of release'
      },
      originalTitle: {
        type: DataTypes.TEXT,
        allowNull: false,
        description: 'original title, in the original language'
      },
      isAdult: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        description: '0: non-adult title; 1: adult title'
      },
      startYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
        description: 'represents the release year of a title. In the case of TV Series, it is the series start year'
      },
      endYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
        description: 'TV Series end year. "\N" for all other title types'
      },
      runtimeMinutes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        description: 'primary runtime of the title, in minutes'
      },
      genres: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        description: 'includes up to three genres associated with the title'
      }
    },
    {
      sequelize,
      modelName: 'TitleBasics',
      tableName: 'title_basics',
      schema: 'imdb',
      timestamps: false,
    }
  )

  return TitleBasics
}
