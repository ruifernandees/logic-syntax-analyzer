import { Syntax } from '../../entities/Syntax';
import path from 'path';

describe('Analyze proposition', () => {
    it('should analyze proposition', () => {
        const syntaxObject = {
            logicConstants: [
                'V',
                'F'
            ],
            propostionalSymbols: [
                "P",
                "Q",
                "R",
                "S",
                "T"
            ],
            logicOperators: {
                negativeOperator: "~",
                andOperator: "&",
                orOperator: "|",
                implicationOperator: "->",
                biImplicationOperator: "<->"
            },
            separators: [
                { first: "(", last: ")" }
            ]
        };


        const syntax = new Syntax(
            syntaxObject.logicConstants,
            syntaxObject.propostionalSymbols,
            syntaxObject.logicOperators,
            syntaxObject.separators
        );

        
    });
});

