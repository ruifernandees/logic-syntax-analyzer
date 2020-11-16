import { logicOperator } from '@entities/Syntax';

type syntax = {
    logicConstants: string[],
    propositionalSymbols: string[],
    logicOperators: logicOperator,
    separators: string[]
};

export interface IAnalyzePropositionRequestDTO {
    syntax: syntax;
    expression: string;
}