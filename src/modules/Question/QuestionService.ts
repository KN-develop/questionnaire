/**
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class QuestionService
 */
import { Inject, Injectable, NotImplementedException } from '@nestjs/common';
import { AddQuestionData } from './dto/AddQuestionData';
import { Question } from '../../entities/Question';
import { EditQuestionData } from './dto/EditQuestionData';
import { QuestionRepositoryInterface } from './QuestionRepositoryInterface';

@Injectable()
export class QuestionService {
  constructor(
    private readonly questionRepository: QuestionRepositoryInterface,
  ) {}

  public async add(data: AddQuestionData): Promise<Question> {
    const question = new Question(data.content, data.authorId);
    await this.questionRepository.save(question);

    return question;
  }

  public async update(data: EditQuestionData): Promise<void> {
    const question = new Question(data.content, data.authorId, data.id);
    await this.questionRepository.update(question);
  }

  public async get(id: string): Promise<Question> {
    const result = await this.questionRepository.get(id);
    return result;
  }

  public async all(): Promise<Question[]> {
    return await this.questionRepository.all();
  }
}
