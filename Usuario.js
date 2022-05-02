const Sequelize = require('sequelize');
const db = require('./ConnectionMySQL');

const Usuario = db.define('users',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
        unique: true,
        isEmail: true, 
    },

    job:{
     

        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,

    },

    idade:{

        type: Sequelize.INTEGER,
        allowNull: false,
        notEmpty: true,
    }
});

Usuario.sync();

module.exports = Usuario;