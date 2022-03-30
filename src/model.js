const mongoose = require('mongoose');

const auditSchema = new mongoose.Schema({
  itemName: String,
  itemId: {},
  changes: {},
  originalDocument: String,
  user: {}
}, { timestamps: true });

module.exports = mongoose.model('Audit', auditSchema);
