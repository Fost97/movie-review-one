const db = require('./db/models')

const test = async () => {
  const titles = await db.TitleBasics.findAll({})
  console.log(titles)
}

test()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
