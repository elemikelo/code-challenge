module.exports = {
  port: process.env.PORT || 4000,
  db: process.env.MONGODB || 'mongodb://localhost/billin',
  mongoStateDebug: true
}
