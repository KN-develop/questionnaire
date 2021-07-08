/**
 * @package
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class AnswerModule
 */
import { Module } from '@nestjs/common';
import { AnswerService } from './AnswerService';
import { AnswerRepository } from './AnswerRepository';

@Module({
  providers: [AnswerService, AnswerRepository],
  controllers: [],
})
export class AnswerModule {}
