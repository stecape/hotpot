const app = require('./express/app')
const sequelize = require('./sequelize/connectors/postgre')
const PORT = 3100

//https://www.sitepoint.com/simplifying-asynchronous-coding-async-functions/

const assertDatabaseConnectionOk = async () => {
	console.log(`Checking database connection...`)
	try {
		await sequelize.authenticate()
		console.log('Database connection OK!')
	} catch (error) {
		console.log('Unable to connect to the database:')
		console.log(error.message)
		process.exit(1)
	}
}

const init = async () => {
	await assertDatabaseConnectionOk()
  //con async faccio partire altre funzioni che assolvano ad altri moduli, tipo il datalogger o la com col Frontend

	console.log(`Starting Backend on port ${PORT}...`)

	app.listen(PORT, () => {
		console.log(`Express server started on port ${PORT}. Try some routes, such as '/api/tags'.`)
	})
}

init()