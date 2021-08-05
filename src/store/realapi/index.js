
const axios = require('axios')
const config = require('../../config').default

module.exports = {
	async getGuests(inviteCode) {
		return axios.get(config.API_URL + '/v1/invite/' + inviteCode)
	},
	async putInvite(inviteCode, payload) {
		return axios.put(config.API_URL + '/v1/invite/' + inviteCode, payload)
	},
	async postAnswers(inviteCode, payload) {
		return axios.post(config.API_URL + '/v1/answers/' + inviteCode, payload)
	}
};
