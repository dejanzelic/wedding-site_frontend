export default {
    questions: [
        {
            name: "Example Question",
            type: "dropdown",
            title: { "default": "This is a question?", "sh": "Ovo je pitanje?" },
            choices: [
                {
                    value: "Answer1",
                    text: { "default": "This is the first Answer", "sh": "Ovo je prvi odgovor" }
                },
                {
                    value: "Answer2",
                    text: { "default": "This is the second Answer", "sh": "Ovo je drugi odgovor" }
                },
            ],
            isRequired: true,
        },
        {
            name: "Second Example Question",
            type: "text",
            title: { "default": "This is the second question?", "sh": "Ovo je drugo pitanje?" },
            isRequired: false,
            autoComplete: "name"
        }
    ]
}