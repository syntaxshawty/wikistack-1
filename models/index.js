const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define('pages', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''

    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: ''
    },
    status: Sequelize.ENUM('open', 'closed')
})

const User = db.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
            isEmail: true
        }
    }
})

module.exports = {
  db , Page, User
};