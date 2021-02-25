import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveysRepositories';

class SurveysController{
  async create(request: Request, response: Response){
    const { title, description } = request.body;

    const survaysRepository = getCustomRepository(SurveysRepository)

    const survey = survaysRepository.create({
      title,
      description
    })

    await survaysRepository.save(survey)

    return response.status(201).json(survey)
  }
  async show(request: Request, response: Response) {
    const surveysRepository = getCustomRepository(SurveysRepository)

    const all = await surveysRepository.find()

    return response.json(all)
  }
}

export { SurveysController };