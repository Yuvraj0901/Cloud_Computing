// Employee_ID_Number, Job_Role, Monthly_Salary, Yearly_Bonus
module.exports = (sequelize, Sequelize) => {
  const pawankumar_111915085_salary = sequelize.define("subham_111915128_salary", {
    employee_id_number: {
      type: Sequelize.INTEGER,
      field: 'employee_id_number'
    },
    job_role: {
      type: Sequelize.STRING
    },
    monthly_salary: {
      type: Sequelize.STRING
    },
    yearly_bonus: {
      type: Sequelize.STRING
    },
  });
  return pawankumar_111915085_salary;
};