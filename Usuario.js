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
    },

    job:{
     

        type: Sequelize.STRING,
        allowNull: false,

    },

    idade:{

        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

Usuario.sync();

module.exports = Usuario;