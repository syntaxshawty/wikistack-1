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

function generateSlug (title) {
    // Removes all non-alphanumeric characters from title
    // And make whitespace underscore
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
  }

Page.beforeValidate((pageInstance) => {
      pageInstance.slug = generateSlug(pageInstance.title)
})

module.exports = {
  db , Page, User
};
