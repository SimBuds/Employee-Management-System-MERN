const Employee = require('../models/Employee');

const EmployeeController = {
  async createEmployee(req, res) {
    try {
      const employee = new Employee(req.body);
      await employee.save();
      res.status(201).json({ message: 'Employee created successfully', employee });
    } catch (error) {
      res.status(500).json({ message: 'Error creating employee', error: error.message });
    }
  },

  async getEmployees(req, res) {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching employees', error: error.message });
    }
  },

  async getEmployeeById(req, res) {
    try {
      const employee = await Employee.findById(req.params.eid);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching employee', error: error.message });
    }
  },

  async updateEmployee(req, res) {
    try {
      const employee = await Employee.findByIdAndUpdate(req.params.eid, req.body, { new: true });
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.status(200).json({ message: 'Employee updated successfully', employee });
    } catch (error) {
      res.status(500).json({ message: 'Error updating employee', error: error.message });
    }
  },

  async deleteEmployee(req, res) {
    try {
      const employee = await Employee.findByIdAndDelete(req.params.eid);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.status(204).json({ message: 'Employee deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting employee', error: error.message });
    }
  }
};

module.exports = EmployeeController;