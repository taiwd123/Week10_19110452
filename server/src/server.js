const app = require('./app')
const {mongoConnection} = require("./services/mongo")
const {loadLaunchData} = require("./models/launches.model")
const {loadPlanetsData} = require("./models/planets.model")
const PORT = process.env.PORT || 8000;

const http = require('http')
const server = http.createServer(app)

const startServer = async () => {
    await mongoConnection()
    await loadPlanetsData()
    await loadLaunchData()

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    })
    
    console.log(PORT);
}

startServer()