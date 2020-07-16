const { userData } = require('../env');
const { resolve: pathResolve } = require('path');
const { FDB } = require('@s4p/sdb');

const db = new FDB(`file://${pathResolve(userData, 'db')}`);

const configSchema = {
  key: { type: 'string', required: true },
  shortcut: { type: 'string' },
};

const configModel = db.model('Config', configSchema);

module.exports = { db, configModel };
