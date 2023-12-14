const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const codeDictionarySchema = new mongoose.Schema({
    userCode: {
        // The actual code provided by the user
        type: String,
        required: true,
    },
    classes: [
        {
            name: {
                type: String,
                required: true,
            },
            attributes: [
                {
                    name: String,
                    type: String,
                },
            ],
            methods: [
                {
                    name: String,
                    returnType: String,
                    parameters: [
                        {
                            name: String,
                            type: String,
                        },
                    ],
                },
            ],
        },
    ],
    relationships: [
        {
            type: {
                type: String,
                enum: ['association', 'aggregation', 'composition'],
                required: true,
            },
            entities: [
                {
                    type: {
                        type: String,
                        enum: ['class', 'object', 'instance'],
                        required: true,
                    },
                    name: String,
                },
            ],
        },
    ]
});

const CodeDictionary = mongoose.model('CodeDictionary', codeDictionarySchema);