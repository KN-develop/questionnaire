/**
 * @author Nikolay Ivanov n_13@bk.ru
 * @class Question
 */
import { Customer } from './Customer';
import { Answer } from './Answer';

export class Question {
  private readonly content: string;
  private readonly author: Customer;
  private readonly answers: Answer[];
}
