const { Model } = require('sequelize')

/**
 * Model that contains the usages and quota linked to an acronis instance
 * @param {import('sequelize').DataTypes} DataTypes
 * @param {import('sequelize').Sequelize} sequelize
 */
module.exports = (sequelize, DataTypes) => {
  class TitleAkas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      this.belongsTo(models.TitleBasics, { foreignKey: 'titleId', targetKey: 'tconst' })
    }
  }

  // initiazion of the model
  TitleAkas.init(
    {
      titleId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        description: 'alphanumeric unique identifier of the title'
      },
      ordering: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        description: 'a number to uniquely identify rows for a given titleId'
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
        description: 'the localized title'
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false,
        description: 'the region for this version of the title'
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false,
        description: 'the language of the title'
      },
      types: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        description: 'Enumerated set of attributes for this alternative title. One or more of the following: "alternative", "dvd", "festival", "tv", "video", "working", "original", "imdbDisplay". New values may be added in the future without warning'
      },
      attributes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        description: 'Additional terms to describe this alternative title, not enumerated'
      },
      isOriginalTitle: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        description: '0: not original title; 1: original title'
      }
    },
    {
      sequelize,
      modelName: 'TitleAkas',
      tableName: 'title_akas',
      timestamps: false
    }
  )

  return TitleAkas
}
