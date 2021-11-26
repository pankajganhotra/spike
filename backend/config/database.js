module.exports = {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/spike-tasks',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
}
