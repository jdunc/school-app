module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/school-app'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

}
