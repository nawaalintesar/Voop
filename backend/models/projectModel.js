const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
    {
        prjName: {
            type: String,
            required: true,
        },

        progLang: {
            type: String,
            required: true,
            enum: ['python', 'java', 'c++'],
        },
        codeStates: [
            {
                codeIndex: {
                    type: Number,
                    required: true,
                },
                codeDictionary: {
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
                },
                diagramID: {
                    type: Schema.Types.ObjectId,
                    ref: 'Diagram',
                    required: true,
                },
                OOPConcept: [// this part i havent really looked into so feel free to change the db structure
                    {
                        concept: {
                            type: String,
                            enum: [
                                'class',
                                'object',
                                'instance',
                                'inheritance',
                                'abstraction',
                                'encapsulation',
                                'polymorphism',
                                'interface',
                                'method_overriding',
                                'method_overloading',
                                'abstract class',
                            ],
                            required: true,
                        },
                        linesOfCode: String, // String to store lines of code for the specific OOP concept
                    },
                ]
            },
        ],
        constraints: {// this part i havent really looked into so feel free to change the db structure
            type: [String],
        },
        codeRecs: {// this part i havent really looked into so feel free to change the db structure
            type: [String],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Project', ProjectSchema);
