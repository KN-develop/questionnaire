import { Question } from '../../entities/Question';
/**
 * @package
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class QuestionRepositoryInterface
 */
export abstract class QuestionRepositoryInterface {
  abstract save(question: Question): Promise<void>;
  abstract get(id: string): Promise<Question>;
  abstract update(question: Question): Promise<void>;
  abstract delete(question: Question): Promise<void>;
  abstract all(): Promise<Question[]>;
}
