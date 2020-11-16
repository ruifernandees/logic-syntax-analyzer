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
    constructor(
        public logicConstants: string[],
        public propositionalSymbols: string[],
        public logicOperators: logicOperator,
        public separators: separator[],
    ) {}

    isLogicConstant(expressionElement: string): Boolean
    {
        return this.logicConstants.includes(expressionElement);
    }

    isPropositionalSymbol(expressionElement: string): Boolean
    {
        return this.propositionalSymbols.includes(expressionElement);
    }

    isLogicOperator(expressionElement: string): Boolean
    {
        const matchedLogicOperators = Object.values(this.logicOperators).filter(symbol => symbol == expressionElement);

        return matchedLogicOperators.includes(expressionElement);
    }

    isSeparator(expressionElement: string): Boolean
    {
        const matchedSeparators = this.separators.filter(separator => {
            return separator.first == expressionElement || separator.last == expressionElement;
        });

        return matchedSeparators.length > 0;
    }

    isFirstSeparator(expressionElement: string): Boolean
    {
        const matchedSeparators = this.separators.filter(separator => {
            return separator.first == expressionElement;
        });

        return matchedSeparators.length > 0;
    }

    isLastSeparator(expressionElement: string): Boolean
    {
        const matchedSeparators = this.separators.filter(separator => {
            return separator.last == expressionElement;
        });

        return matchedSeparators.length > 0;
    }

    getMatchSeparator(separator: string): string|null
    {
        if (!this.isSeparator(separator)) {
            return null;
        }

        if (this.isFirstSeparator(separator)) {
            const matchedSeparators = this.separators.filter(separatorItem => {
                return separatorItem.first == separator;
            });

            return matchedSeparators[0].last;
        }

        if (this.isLastSeparator(separator)) {
            const matchedSeparators = this.separators.filter(separatorItem => {
                return separatorItem.last == separator;
            });

            return matchedSeparators[0].first;
        }

        return null;
    }

    isLastSeparatorSyntaticallyValidOnExpression(previousIndex: number, expressionArray: string[], separator: string): Function|Boolean 
    {
        if (expressionArray[previousIndex] == this.getMatchSeparator(separator)) {
            return true;
        }

        if (previousIndex < 0) {
            return false;
        }

        return this.isLastSeparatorSyntaticallyValidOnExpression(previousIndex - 1, expressionArray, separator);
    }

    isFirstSeparatorSyntaticallyValidOnExpression(nextIndex: number, expressionArray: string[], separator: string): Function|Boolean 
    {
        if (expressionArray[nextIndex] == this.getMatchSeparator(separator)) {
            return true;
        }

        if (nextIndex > expressionArray.length - 1) {
            return false;
        }

        return this.isFirstSeparatorSyntaticallyValidOnExpression(nextIndex + 1, expressionArray, separator);
    }

    verifyPreviousItem(previousIndex: number, expressionArray: string[]): Boolean 
    {
        return (
            this.isLogicConstant(expressionArray[previousIndex]) 
            || this.isPropositionalSymbol(expressionArray[previousIndex])
            || this.isSeparator(expressionArray[previousIndex])
        );
    }

    verifyNextItem(nextIndex: number, expressionArray: string[]): Boolean 
    {
        return (
            this.isLogicConstant(expressionArray[nextIndex]) 
            || this.isPropositionalSymbol(expressionArray[nextIndex])
            || this.logicOperators.negativeOperator == expressionArray[nextIndex]
            || this.isSeparator(expressionArray[nextIndex])
        );
    }

    verifyNextItemForNegativeOperator(nextIndex: number, expressionArray: string[]): Boolean 
    {
        return (
            this.isLogicConstant(expressionArray[nextIndex]) 
            || this.isPropositionalSymbol(expressionArray[nextIndex])
            || this.isFirstSeparator(expressionArray[nextIndex])
        );
    }
}