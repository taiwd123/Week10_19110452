const {getAllPlanets} = require('../../models/planets.model')

const httpGetAllPlanets = (req, res) => {
    console.log(getAllPlanets());
    return res.status(200).json(getAllPlanets())
}


module.exports = {
    httpGetAllPlanets,
}