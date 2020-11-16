import { analyzePropositionController } from '@useCases/AnalyzeProposition';
import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/expression', (request: Request, response: Response) => { 
    return analyzePropositionController.store(request, response);
});

export default routes;