const AirportsService = require('./airports.service');

function getAirports(req, res, next) {
  const query = req.query.query;
  const page = isNaN(req.query.page) ? undefined : req.query.page;
  const itemsPerPage = isNaN(req.query.itemsPerPage) ? undefined : req.query.itemsPerPage;

  return AirportsService.searchAirports(
    query,
    page,
    itemsPerPage
  );
}

module.exports = {
  getAirports
};