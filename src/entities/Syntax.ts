export type logicOperator = {
    negativeOperator: string;
    andOperator: string;
    orOperator: string;
    implicationOperator: string;
    biImplicationOperator: string;
};

export type separator = {
    first: string,
    last: string
};

export class Syntax {
    public logicConstants: string[];
    public propositionalSymbols: string[];
    public logicOperators: logicOperator;
    public separators: separator[];
    
    constructor(
        logicConstants: string[],
        propositionalSymbols: string[],
        logicOperators: logicOperator,
        separators: separator[],
        ) {
        const logicConstantsTrim = logicConstants.map(constant => constant.trim());

        const logicOperatorsTrim = {
            negativeOperator: logicOperators.negativeOperator.trim(),
            andOperator: logicOperators.andOperator.trim(),
            orOperator: logicOperators.orOperator.trim(),
            implicationOperator: logicOperators.implicationOperator.trim(),
            biImplicationOperator: logicOperators.biImplicationOperator.trim(),
        };

        const separatorsTrim = separators.map(({ first, last }: separator) => {
            return { 
                first: first.trim(), 
                last: last.trim() 
            };
        });

        
        const propositionalSymbolsTrim = propositionalSymbols.map(symbol => symbol.trim());
        
        this.logicConstants = logicConstantsTrim;
        this.propositionalSymbols = propositionalSymbolsTrim;
        this.logicOperators = logicOperatorsTrim;
        this.separators = separatorsTrim;
    }
}