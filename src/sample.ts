import { AnalyzePropositionUseCase } from './useCases/AnalyzeProposition/AnalyzePropositionUseCase';

const analyzePropositionUseCase = new AnalyzePropositionUseCase();
const result = analyzePropositionUseCase.execute({
  expression: '(P -> Q) & T',
  syntax: {
    logicConstants: [
      'V',
      'F',
    ],
    propositionalSymbols: [
      'P',
      'Q',
      'R',
      'S',
      'T',
    ],
    logicOperators: {
      negativeOperator: '~',
      andOperator: '&',
      orOperator: '|',
      implicationOperator: '->',
      biImplicationOperator: '<->',
    },
    separators: [
      { first: '(', last: ')' },
    ],
  },
});
console.log(result);
