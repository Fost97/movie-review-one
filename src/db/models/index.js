const path = require('path')
const { Sequelize, Op } = require('sequelize')

const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '../config'))[env]
const db = {}

if (!config) {
  throw new Error(`Configurations for env "${env}" are not been supplied`)
}

const sequelize = new Sequelize(config)

db.TitleBasics = require('./title-basics')(sequelize, Sequelize.DataTypes)
db.TitleAkas = require('./title-akas')(sequelize, Sequelize.DataTypes)

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize
db.Op = Op

module.exports = db
