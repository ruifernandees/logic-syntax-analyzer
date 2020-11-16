import { AnalyzePropositionController } from './AnalyzePropositionController';
import { AnalyzePropositionUseCase } from './AnalyzePropositionUseCase';

const analyzePropositionUseCase = new AnalyzePropositionUseCase();

const analyzePropositionController = new AnalyzePropositionController(
    analyzePropositionUseCase
);

export { analyzePropositionController };