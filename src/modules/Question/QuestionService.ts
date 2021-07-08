/**
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class QuestionService
 */
import { NotImplementedException } from '@nestjs/common';
import { AddQuestionData } from './dto/AddQuestionData';
import { Question } from '../../entities/Question';
import { EditQuestionData } from './dto/EditQuestionData';

export class QuestionService {
  public async add(data: AddQuestionData): Promise<void> {
    throw new NotImplementedException();
  }

  public async edit(data: EditQuestionData): Promise<void> {
    throw new NotImplementedException();
  }

  public async all(): Promise<Question[]> {
    throw new NotImplementedException();
  }
}
