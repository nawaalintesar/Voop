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
                        type: [String]
                    },
                    classes: [
                        {
                            isClass: {//for interface
                                type: Boolean,
                                required: true
                            },
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
                    relationships:
                        [{
                            type: String, // 'association', 'aggregation', etc.
                            enum: ['association', 'aggregation', 'composition'],
                            required: true,
                            source: {
                                type: {
                                    String, // 'class', 'interface', 'instance'
                                    enum: ['interface', 'class', 'instance']
                                },
                                name: String, // Name of the source entity
                            },
                            target: {
                                type: {
                                    String, // 'class', 'interface', 'instance'
                                    enum: ['interface', 'class', 'instance']
                                },
                                name: String, // Name of the target entity
                            },
                        }],
                },
                diagramID: {
                    type: Schema.Types.ObjectId,
                    ref: 'Diagram',
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
                        linesOfCode: String, // String to store lines of code for the specific OOP concept maybe refer to the index directly instead
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
