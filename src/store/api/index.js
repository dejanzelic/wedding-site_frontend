// https://stackoverflow.com/questions/56289549/using-mock-data-while-on-development-with-vue-vuex
// Needed a way to continue front end dev without the server
const realapi = require('../realapi');
const mockapi = require('../mockapi');

module.exports = process.env.VUE_APP_API_URL === 'mockapi' ? mockapi : realapi ;