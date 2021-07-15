import { Answer } from '../../entities/Answer';

/**
 * @package
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class AnswerRepositoryInterface
 */
export abstract class AnswerRepositoryInterface {
  abstract save(answer: Answer): Promise<void>;
}
