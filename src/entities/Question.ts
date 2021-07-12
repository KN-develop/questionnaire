/**
 * @author Nikolay Ivanov n_13@bk.ru
 * @class Question
 */
import { Answer, StatusList } from './Answer';

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

  public getId() {
    return this.id;
  }

  public getContent(): string {
    return this.content;
  }

  public getAuthorId(): string {
    return this.authorId;
  }

  public getAnswer(): Answer[] {
    return this.answers;
  }

  public calculateActivityRating(): number {
    if (!this.answers.length) {
      return 0;
    }

    const acceptedAnswers = this.answers.filter(
      (answer) => answer.getStatus() === StatusList.ACCEPTED,
    );

    return acceptedAnswers.reduce((prev, next) => {
      return prev + next.getRegardsCount();
    }, 0);
  }

  public getBestAnswer(): Answer | null {
    if (!this.answers.length) {
      return null;
    }

    const best = this.answers.sort((a, b) => a.getRating() - b.getRating())[0];
    return best.getRating() > 0 ? best : this.answers[0];
  }
}
