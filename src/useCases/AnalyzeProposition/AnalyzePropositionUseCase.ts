import { Syntax } from "@entities/Syntax";
import { IAnalyzePropositionRequestDTO } from "./AnalyzePropositionRequestDTO";

export class AnalyzePropositionUseCase {
    constructor() {}

    async execute(data: IAnalyzePropositionRequestDTO) {
        const {
            logicConstants,
            propositionalSymbols,
            logicOperators,
            separators
        } = data.syntax;

        const expressionString = data.expression;
        const expressionArray = expressionString.split(/\s+/);
        const expressionStringWithoutBlankSpace = expressionArray.join();
        const expression = expressionStringWithoutBlankSpace.split(",");

        const syntax = new Syntax(logicConstants, propositionalSymbols, logicOperators, separators);

        let allTruthyOfElements: Boolean[] = [];

        expression.forEach((item, index) => {
            if (syntax.isLogicOperator(item)) {
                if (syntax.logicOperators.negativeOperator == item) {
                    const isNextItemValid = syntax.verifyNextItemForNegativeOperator(index + 1, expressionArray);
                    
                    allTruthyOfElements.push(isNextItemValid);
                    
                    return;
                }

                const isPreviousItemValid = syntax.verifyPreviousItem(index - 1, expressionArray);
                const isNextItemValid = syntax.verifyNextItem(index + 1, expressionArray);

                allTruthyOfElements.push(isPreviousItemValid && isNextItemValid);

                return;
            }

            if (syntax.isSeparator(item)) {
                if (syntax.isFirstSeparator(item)) {
                    const haveMatchSeparatorOnExpression = syntax.isFirstSeparatorSyntaticallyValidOnExpression(index + 1, expressionArray, item);
                    
                    allTruthyOfElements.push(haveMatchSeparatorOnExpression ? true : false);

                    return;
                }

                if (syntax.isLastSeparator(item)) {
                    const haveMatchSeparatorOnExpression = syntax.isLastSeparatorSyntaticallyValidOnExpression(index - 1, expressionArray, item);

                    allTruthyOfElements.push(haveMatchSeparatorOnExpression ? true : false);

                    return;
                }

                return;
            }
        });

        const isExpressionValid = !allTruthyOfElements.includes(false);

        return isExpressionValid;
    }
}