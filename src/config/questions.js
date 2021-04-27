export default {
    questions: [
        {
            name: "Example Question",
            type: "dropdown",
            title: { "default": "This is a question?", "sr": "Ovo je pitanje?" },
            choices: [
                {
                    value: "Answer1",
                    text: { "default": "This is the first Answer", "sr": "Ovo je prvi odgovor" }
                },
                {
                    value: "Answer2",
                    text: { "default": "This is the second Answer", "sr": "Ovo je drugi odgovor" }
                },
            ],
            isRequired: true,
        },
        {
            name: "Second Example Question",
            type: "text",
            title: { "default": "This is the second question?", "sr": "Ovo je drugo pitanje?" },
            isRequired: false,
            autoComplete: "name"
        }
    ]
}