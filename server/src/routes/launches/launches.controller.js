const {getAllLaunches, addNewLaunch, existLaunchWithId, abortLaunchByid} = require('../../models/launches.model')

const httpGetAllLaunches = (req, res) => {
    return res.status(200).json(getAllLaunches())
}

const httpAddNewLaunch = (req, res) => {
    const launch = req.body
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        res.status(400).json({
            error: "Missing required launch property"
        })
    }
    launch.launchDate = new Date(launch.launchDate)
    if(isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: "Invalid launch date"
        })
    }
    addNewLaunch(launch)
    res.set("Content-Type", "application/json")
    return res.status(201).json(launch)
}

const httpAbortLaunch = (req, res) => {
    const launchId= Number(req.params.id)
    if (!existLaunchWithId(launchId)) {
        res.status(404).json({
            error: 'Launch not found'
        })
    }
    const aborted = abortLaunchByid(launchId)
    res.status(200).json(aborted)
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
}