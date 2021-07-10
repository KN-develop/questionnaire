/**
 * @author Nikolay Ivanov n_13@bk.ru
 * @class Question
 */
import { Answer } from './Answer';

export class Question {
  private readonly _id?: string;
  private readonly content: string;
  private readonly authorId: string;
  private readonly answers: Answer[];

  constructor(content: string, authorId: string) {
    this.content = content;
    this.authorId = authorId;
  }

  public getContent(): string {
    return this.content;
  }

  public getAuthorId(): string {
    return this.authorId;
  }
}
