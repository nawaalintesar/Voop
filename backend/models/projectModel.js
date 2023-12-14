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
                    type: CodeDictionary.schema,
                    ref: 'CodeDictionary',
                    required: true,
                },
                diagramID: {
                    type: Schema.Types.ObjectId,
                    ref: 'Diagram',
                    required: true,
                },
                OOPConcept: [
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
        constraints: {
            type: [String],
        },
        codeRecs: {
            type: [String],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Project', ProjectSchema);
