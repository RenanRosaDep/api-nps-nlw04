import { Survey } from "../models/Survey";
import {  Repository, EntityRepository } from 'typeorm'


@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey>{}

export { SurveysRepository }