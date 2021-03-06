module.exports = {
    async getGuests(inviteCode) {
        switch (inviteCode) {
        case "noemail":
            return { data: {
                confirmed: false,
                list: [
                    {
                        'name':'Tester Testy',
                        'attending': null
                    }
                ]
                } 
            };
        case "multiple":
            return { data: {
                email: "tester@gmail.com",
                confirmed: false,
                list: [
                    {
                        'name':'Tester Testy',
                        'attending': null
                    },
                    {
                        'name':'Testera Testy',
                        'attending': null
                    },
                    {
                        'name':'Tester Testy jr',
                        'attending': null
                    }
                ]
                } 
            };
            case "multipleConfirmed":
                return { data: {
                    email: "tester@gmail.com",
                    confirmed: true,
                    list: [
                        {
                            'name':'Tester Testy',
                            'attending': true
                        },
                        {
                            'name':'Testera Testy',
                            'attending': true
                        },
                        {
                            'name':'Tester Testy jr',
                            'attending': false
                        }
                    ]
                    } 
                };
        case "multipleunknown":
            return { data: {
                email: "tester@gmail.com",
                confirmed: false,
                list: [
                    {
                        'name':'Tester Testy',
                        'attending': null
                    },
                    {
                        'name':'Testera Testy',
                        'attending': null
                    },
                    {
                        'name':'',
                        'attending': null
                    }
                ]
                } 
            };
        default:
            return { data: {
                email: "tester@gmail.com",
                confirmed: false,
                list: [
                    {
                        'name':'Tester Testy',
                        'attending': null
                    }]
            } 
        };
        }
    }
};
