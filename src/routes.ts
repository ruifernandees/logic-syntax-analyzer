import { analyzePropositionController } from '@useCases/AnalyzeProposition';
import { Router, Request, Response } from 'express';

const routes = Router();

routes.post('/expression', (request: Request, response: Response) => { 
    return analyzePropositionController.store(request, response);
});

export default routes;