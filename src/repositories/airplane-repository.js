const CrudRepository = require("./crud-repository");
const { Airplane } = require("../models");

class AriplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}

module.exports = AriplaneRepository;
