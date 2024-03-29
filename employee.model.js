// Employee_ID_Number, First_Name, Last_Name, Date_of_Birth, Contact_Number 
module.exports = (sequelize, Sequelize) => {
  const subham_111915128_details = sequelize.define("subham_111915128_details", {
    employee_id_number: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
      field: 'employee_id_number'
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_lame: {
      type: Sequelize.STRING
    },
    date_of_birth: {
      type: Sequelize.DATE
    },
    contact_number: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
  });
  return subham_111915128_details;
};


