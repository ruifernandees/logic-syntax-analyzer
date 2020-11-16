import path from 'path';
import { AnalyzePropositionUseCase } from './AnalyzePropositionUseCase';

describe('Analyze proposition', () => {
    const syntaxObject = {
        logicConstants: [
            'V',
            'F'
        ],
        propositionalSymbols: [
            "P",
            "Q",
            "R",
            "S",
            "T"
        ],
        logicOperators: {
            negativeOperator: "~",
            andOperator: "&&",
            orOperator: "|",
            implicationOperator: "->",
            biImplicationOperator: "<->"
        },
        separators: [
            { first: "(", last: ")" }
        ]
    };

    it('should be true', () => {
        const expression = "( ~ P -> ~ Q ) && R";

        const analyzePropositionUseCase = new AnalyzePropositionUseCase();
        const result = analyzePropositionUseCase.execute({ syntax: syntaxObject, expression });
        
        expect(result).toBeTruthy();
    });

    it('should be false', () => {
        const expression = " ~ P -> ~ Q ) && R";

        const analyzePropositionUseCase = new AnalyzePropositionUseCase();
        const result = analyzePropositionUseCase.execute({ syntax: syntaxObject, expression });
        
        expect(result).toBeFalsy();
    });

    it('should be false', () => {
        const expression = "( ~ P -> ~ Q  && R";

        const analyzePropositionUseCase = new AnalyzePropositionUseCase();
        const result = analyzePropositionUseCase.execute({ syntax: syntaxObject, expression });
        
        expect(result).toBeFalsy();
    });

    it('should be false', () => {
        const expression = "( ~ P -> ~   && R";

        const analyzePropositionUseCase = new AnalyzePropositionUseCase();
        const result = analyzePropositionUseCase.execute({ syntax: syntaxObject, expression });
        
        expect(result).toBeFalsy();
    });

    it('should be false', () => {
        const expression = "( ~ P -> ~ Q)  && ";

        const analyzePropositionUseCase = new AnalyzePropositionUseCase();
        const result = analyzePropositionUseCase.execute({ syntax: syntaxObject, expression });
        
        expect(result).toBeFalsy();
    });

    it('should be false', () => {
        const expression = "( ~ P - ~ Q)  && R";

        const analyzePropositionUseCase = new AnalyzePropositionUseCase();
        const result = analyzePropositionUseCase.execute({ syntax: syntaxObject, expression });
        
        expect(result).toBeFalsy();
    });
});

