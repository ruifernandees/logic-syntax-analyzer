import { logicOperator, separator } from '../../entities/Syntax';

type syntax = {
    logicConstants: string[],
    propositionalSymbols: string[],
    logicOperators: logicOperator,
    separators: separator[]
};

export interface IAnalyzePropositionRequestDTO {
    syntax: syntax;
    expression: string;
}