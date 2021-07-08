/**
 * @author Nikolay Ivanov n_13@bk.ru
 * @class Answer
 */
import { Regard } from './Regard';

export enum StatusList {
  NEW = 'NEW',
  DECLINE = 'DECLINE',
  ACCEPTED = 'ACCEPTED',
}

export class Answer {
  private readonly content: string;
  private readonly regards: Regard[];
  private readonly status: StatusList;

  public getContent(): string {
    return this.content;
  }

  public getRating(): number {
    return this.regards.reduce((prev, next) => {
      return prev + (next.getValue() ? 1 : -1);
    }, 1);
  }
}
