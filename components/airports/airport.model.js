const Sequelize = require('sequelize');
const sequelize = require('../../db');

module.exports = sequelize.define(
  'airport',
  {
    id: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
    city: Sequelize.STRING,
    country: Sequelize.STRING,
    iata: Sequelize.STRING,
    icao: Sequelize.STRING,
    x: Sequelize.FLOAT(8),
    y: Sequelize.FLOAT(8),
    elevation: Sequelize.STRING,
    timezone: Sequelize.STRING,
    dst: Sequelize.STRING,
    tzid: {
      type: Sequelize.STRING,
      field: 'tz_id'
    },
    type: Sequelize.STRING,
    source: Sequelize.STRING,
  },
  {
    tableName: 'airports',
  },
);