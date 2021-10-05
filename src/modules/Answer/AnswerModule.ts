/**
 * @package
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class AnswerModule
 */
import { Module } from '@nestjs/common';
import { AnswerService } from './AnswerService';
import { AnswerRepository } from '../../repository/mongo/AnswerRepository';
import { AnswerRepositoryInterface } from './AnswerRepositoryInterface';

const answerRepositoryProvider = {
  provide: AnswerRepositoryInterface,
  useClass: AnswerRepository,
};

@Module({
  providers: [AnswerService, answerRepositoryProvider],
  controllers: [],
})
export class AnswerModule {}
