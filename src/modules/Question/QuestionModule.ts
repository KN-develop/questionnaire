/**
 * @package
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class QuestionModule
 */
import { Module } from '@nestjs/common';
import { QuestionService } from './QuestionService';
import { QuestionRepository } from './QuestionRepository';

@Module({
  providers: [QuestionService, QuestionRepository],
  controllers: [],
})
export class QuestionModule {}
