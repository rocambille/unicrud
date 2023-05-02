const AbstractManager = require("./AbstractManager");

class UnicornManager extends AbstractManager {
  constructor() {
    super({ table: "unicorn" });
  }

  insert(unicorn) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      unicorn.name,
    ]);
  }

  update(unicorn) {
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [unicorn.name, unicorn.id]
    );
  }
}

module.exports = UnicornManager;
