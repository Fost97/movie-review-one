const { Model } = require('sequelize')

/**
 * Model that contains the usages and quota linked to an acronis instance
 * @param {import('sequelize').DataTypes} DataTypes
 * @param {import('sequelize').Sequelize} sequelize
 */
module.exports = (sequelize, DataTypes) => {
  class NameBasics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
    }
  }

  // initiazion of the model
  NameBasics.init(
    {
      nconst: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      primaryname: {
        type: DataTypes.TEXT
      },
      birthYear: {
        type: DataTypes.INTEGER
      },
      deathYear: {
        type: DataTypes.INTEGER
      },
      primaryProfession: {
        type: DataTypes.TEXT
      },
      knownForTitles: {
        type: DataTypes.TEXT
      }
    },
    {
      sequelize,
      modelName: 'NameBasics',
      tableName: 'name_basics',
      schema: 'imdb',
      timestamps: false,
    }
  )

  return NameBasics
}
