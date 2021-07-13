/**
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class Contact
 */
export class Contact {
  private readonly value: string;
  private readonly name: string;
  private readonly channel: string;

  constructor(channel: string, name: string, value: string) {
    this.channel = channel;
    this.name = name;
    this.value = value;
  }

  public getName(): string {
    return this.name;
  }

  public getChannel(): string {
    return this.channel;
  }

  public getValue(): string {
    return this.value;
  }
}
