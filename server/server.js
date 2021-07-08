const app = require('./express/app')
const sequelize = require('./sequelize/connectors/postgre')
//const pglisten = require('./sequelize/connectors/pglisten')
const server = require('http').createServer(app)
const PORT = 3100
const io = require('socket.io')(server, {
  cors: {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"   
  }
})
io.on('connection', socket => { 
  console.log('Client connected') 
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("TAGS", response)
  socket.on("disconnecting", () => {
    console.log("Client disconnected")
  })
})


//https://www.sitepoint.com/simplifying-asynchronous-coding-async-functions/

const assertDatabaseConnectionOk = async () => {
	console.log(`CRUD - Checking database connection...`)
	try {
		await sequelize.authenticate()
		console.log('CRUD - Database connection OK!')
	} catch (error) {
		console.log('CRUD - Unable to connect to the database:')
		console.log(error.message)
		process.exit(1)
	}
}

/* const assertNotifyListenOk = async () => {
	console.log(`NotifyListen - Checking database connection...`)
	try {
		await pglisten.connect()
		console.log('NotifyListen - Database connection OK!')
	} catch (error) {
		console.log('NotifyListen - Unable to connect to the database:')
		console.log(error.message)
		process.exit(1)
	}
} */

const init = async () => {
  //await DB connection
	await assertDatabaseConnectionOk()
  //await assertNotifyListenOk()
  //await query tutti i valori delle tag per inizializzare la collection

  //await publish subscribe  verso il client

  //parallel query listen al DB
  //pglisten.tagsUpd()
  
  //parallel listen for client request
	console.log(`Starting Backend on port ${PORT}...`)
	server.listen(PORT, () => {
		console.log(`Express server started on port ${PORT}. Try some routes, such as '/api/tags'.`)
	})
}

init()