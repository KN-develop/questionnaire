/**
 * @author Nikolay Ivanov n_13@bk.ru
 * @class Question
 */
import { Answer } from './Answer';

export class Question {
  private readonly id: string | null;
  private readonly content: string;
  private readonly authorId: string;
  private readonly answers: Answer[];

  constructor(content: string, authorId: string, id = null) {
    this.content = content;
    this.authorId = authorId;
    this.id = id;
  }

  public getContent(): string {
    return this.content;
  }

  public getAuthorId(): string {
    return this.authorId;
  }
}
