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

        const syntax = new Syntax(logicConstants, propositionalSymbols, logicOperators, separators);

        
    }
}