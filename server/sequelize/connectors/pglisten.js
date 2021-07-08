const {createPostgresSubscriber} = require('pg-listen')

// Accepts the same connection config object that the "pg" package would take
const subscriber = createPostgresSubscriber({ connectionString: 'postgres://admin:pgadmin@localhost:5432/postgres' })

subscriber.notifications.on("TAGS", (payload) => {
  // Payload as passed to subscriber.notify() (see below)
  //Qui devo chiamare la pubsub
  console.log("Received notification in 'TAGS':", payload)
})

subscriber.events.on("error", (error) => {
  console.error("Fatal database connection error:", error)
  // process.exit(1)
})

// process.on("exit", () => {
//   subscriber.close()
// })

const connect = async () => {
  await subscriber.connect()
  await subscriber.listenTo("TAGS")
}

const tagsUpd = async () => {
  await subscriber.notify("TAGS", {
    greeting: "Hey, buddy.",
    timestamp: Date.now()
  })
}

module.exports = {
  connect,
  tagsUpd
}