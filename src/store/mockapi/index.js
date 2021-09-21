module.exports = {
    async getHealth() {
		return {
            status: 200,
            data: {}}
	},
    async getGuests(inviteCode) {
        switch (inviteCode) {
            case "noemail":
                return {
                    status: 200,
                    data: {
                        confirmed: false,
                        list: [
                            {
                                'name': 'Tester Testy',
                                'attending': null
                            }
                        ]
                    }
                };
            case "multiple":
                return {
                    status: 200,
                    data: {
                        email: "tester@gmail.com",
                        confirmed: false,
                        list: [
                            {
                                'name': 'Tester Testy',
                                'attending': null
                            },
                            {
                                'name': 'Testera Testy',
                                'attending': null
                            },
                            {
                                'name': 'Tester Testy jr',
                                'attending': null
                            }
                        ]
                    }
                };
            case "multipleConfirmed":
                return {
                    status: 200,
                    data: {
                        email: "tester@gmail.com",
                        confirmed: true,
                        list: [
                            {
                                'name': 'Tester Testy',
                                'attending': true
                            },
                            {
                                'name': 'Testera Testy',
                                'attending': true
                            },
                            {
                                'name': 'Tester Testy jr',
                                'attending': false
                            }
                        ]
                    }
                };
            case "multipleunknown":
                return {
                    status: 200,
                    data: {
                        email: "tester@gmail.com",
                        confirmed: false,
                        list: [
                            {
                                'name': 'Tester Testy',
                                'attending': null
                            },
                            {
                                'name': 'Testera Testy',
                                'attending': null
                            },
                            {
                                'name': '',
                                'attending': null
                            }
                        ]
                    }
                };
            default:
                return {
                    status: 404,
                    data: {
                        message: "INVITE_NOT_FOUND"
                    }
                };
        }
    }
};
