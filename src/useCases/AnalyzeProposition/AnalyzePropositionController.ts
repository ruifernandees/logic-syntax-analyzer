import { Request, Response } from "express";
import { AnalyzePropositionUseCase } from "./AnalyzePropositionUseCase";

export class AnalyzePropositionController {
    constructor(
        private analyzePropositionUseCase: AnalyzePropositionUseCase
    ) {}

    async store(request: Request, response: Response): Promise<Response> 
    {
        const { syntax, expression } = request.body;

        try {
            const result = this.analyzePropositionUseCase.execute({ syntax, expression });

            return response.status(200).json({
                result 
            }).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}