const {Op} = require('sequelize');
const AirportModel = require('./airport.model');

const searchAirports = async (query = '', page = 1, itemsPerPage = 20) => {
  const limit = itemsPerPage;
  const offset = (page - 1) * itemsPerPage;
  const searchQuery = {[Op.like]: `%${query}%`};

  const res = await AirportModel.findAndCountAll({
    where: {
      [Op.or]: {
        name: searchQuery,
        country: searchQuery,
        iata: searchQuery,
      }
    }, limit, offset
  });
  const totalNumberOfPages = Math.ceil(res.count / itemsPerPage) ;
  const data = res.rows;

  return {
    data,
    totalNumberOfPages,
    page,
    itemsPerPage
  };
};

module.exports = {searchAirports};