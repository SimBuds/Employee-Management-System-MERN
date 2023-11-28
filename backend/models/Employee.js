const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true, maxlength: 100 },
  lastName: { type: String, required: true, maxlength: 50 },
  email: { type: String, required: true, unique: true, maxlength: 50 },
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;