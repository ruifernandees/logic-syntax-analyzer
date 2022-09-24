import { Syntax } from "../../entities/Syntax";
import { IAnalyzePropositionRequestDTO } from "./AnalyzePropositionRequestDTO";

export class AnalyzePropositionUseCase {
    constructor() {}

    execute(data: IAnalyzePropositionRequestDTO) {
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
        let allElements: any[] = [];

        expression.forEach((item, index) => {
            if (syntax.isLogicOperator(item)) {
                if (syntax.logicOperators.negativeOperator == item) {
                    const isNextItemValid = syntax.verifyNextItemForNegativeOperator(index + 1, expressionArray);
                    
                    allTruthyOfElements.push(isNextItemValid);
                    allElements.push({
                        item,
                        type: 'NEGATIVE_OPERATOR'
                    });
                    
                    return;
                }

                const isPreviousItemValid = syntax.verifyPreviousItem(index - 1, expressionArray);
                const isNextItemValid = syntax.verifyNextItem(index + 1, expressionArray);

                allTruthyOfElements.push(isPreviousItemValid && isNextItemValid);
                allElements.push({
                    item,
                    type: 'LOGIC_OPERATOR'
                });

                return;
            }

            if (syntax.isSeparator(item)) {
                if (syntax.isFirstSeparator(item)) {
                    const haveMatchSeparatorOnExpression = syntax.isFirstSeparatorSyntaticallyValidOnExpression(index + 1, expressionArray, item);
                    
                    allTruthyOfElements.push(haveMatchSeparatorOnExpression ? true : false);
                    allElements.push({
                        item,
                        type: 'SEPARATOR'
                    });

                    return;
                }

                if (syntax.isLastSeparator(item)) {
                    const haveMatchSeparatorOnExpression = syntax.isLastSeparatorSyntaticallyValidOnExpression(index - 1, expressionArray, item);

                    allTruthyOfElements.push(haveMatchSeparatorOnExpression ? true : false);
                    allElements.push({
                        item,
                        type: 'SEPARATOR'
                    });

                    return;
                }

                return;
            }
            if (syntax.isPropositionalSymbol(item)) {
                allElements.push({
                    item,
                    type: 'PROPOSITIONAL_SYMBOL'
                });
                return;
            }
            if (syntax.isLogicConstant(item)) {
                allElements.push({
                    item,
                    type: 'LOGIC_CONSTANT'
                });
                return;
            }
            if (
                !syntax.isPropositionalSymbol(item)
                && !syntax.isLogicConstant(item)
            ) {
                allTruthyOfElements.push(false);
                return;
            }

        });

        const isExpressionValid = !allTruthyOfElements.includes(false);
        console.log(allElements)

        return isExpressionValid;
    }
}