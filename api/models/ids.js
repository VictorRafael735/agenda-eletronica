'use strict';
module.exports = (sequelize) => {
  const Ids = sequelize.define('Ids',{}, {});

  return Ids;
};