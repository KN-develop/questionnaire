/**
 * @package
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class QuestionModule
 */
import { Module } from '@nestjs/common';
import { QuestionService } from './QuestionService';
import { QuestionRepository } from '../../repository/mongo/QuestionRepository';
import { QuestionRepositoryInterface } from './QuestionRepositoryInterface';

const questionRepositoryProvider = {
  provide: QuestionRepositoryInterface,
  useClass: QuestionRepository,
};

@Module({
  providers: [QuestionService, questionRepositoryProvider],
  controllers: [],
})
export class QuestionModule {}
