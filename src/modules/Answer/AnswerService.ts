/**
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class AnswerService
 */
import { NotImplementedException } from '@nestjs/common';
import { EvaluateAnswerData } from './dto/EvaluateAnswerData';
import { AddAnswerData } from './dto/AddAnswerData';
import { ChangeStatusData } from './dto/ChangeStatusData';
import { Answer } from '../../entities/Answer';

export class AnswerService {
  public async create(data: AddAnswerData): Promise<void> {
    throw new NotImplementedException();
  }

  public async evaluate(data: EvaluateAnswerData) {
    throw new NotImplementedException();
  }

  public async changeStatus(data: ChangeStatusData): Promise<Answer> {
    throw new NotImplementedException();
  }
}
